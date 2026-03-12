import { RangeError } from '../errors';

export type BitFieldResolvable<S extends string, N extends number | bigint = number> =
  | S
  | N
  | `${number}`
  | BitField<S, N>
  | readonly BitFieldResolvable<S, N>[];

interface BitFieldConstructor<S extends string, N extends number | bigint> {
  new (bits?: BitFieldResolvable<S, N>): BitField<S, N>;
  FLAGS: Record<S, N>;
  defaultBit: N;
  resolve(bit?: BitFieldResolvable<S, N>): N;
}

class BitField<S extends string, N extends number | bigint = number> {
  public bitfield: N;

  public static FLAGS: Record<string, number | bigint> = {};

  public static defaultBit: number | bigint = 0;

  public constructor(bits?: BitFieldResolvable<S, N>) {
    const ctor = this.constructor as unknown as BitFieldConstructor<S, N>;
    this.bitfield = ctor.resolve(bits ?? ctor.defaultBit);
  }

  public any(bit: BitFieldResolvable<S, N>): boolean {
    const ctor = this.constructor as unknown as BitFieldConstructor<S, N>;
    return (this.bitfield & ctor.resolve(bit)) !== ctor.defaultBit;
  }

  public equals(bit: BitFieldResolvable<S, N>): boolean {
    const ctor = this.constructor as unknown as BitFieldConstructor<S, N>;
    return this.bitfield === ctor.resolve(bit);
  }

  public has(bit: BitFieldResolvable<S, N>): boolean {
    const ctor = this.constructor as unknown as BitFieldConstructor<S, N>;
    const resolvedBit = ctor.resolve(bit);
    return (this.bitfield & resolvedBit) === resolvedBit;
  }

  public missing(bits: BitFieldResolvable<S, N>): S[] {
    const ctor = this.constructor as unknown as BitFieldConstructor<S, N>;
    return new ctor(bits).remove(this).toArray();
  }

  public freeze(): Readonly<BitField<S, N>> {
    return Object.freeze(this);
  }

  public add(...bits: BitFieldResolvable<S, N>[]): this {
    const ctor = this.constructor as unknown as BitFieldConstructor<S, N>;
    let total: any = ctor.defaultBit;
    for (const bit of bits) {
      total |= ctor.resolve(bit);
    }
    if (Object.isFrozen(this)) return new ctor(((this.bitfield as any) | total) as any) as this;
    this.bitfield = (((this.bitfield as any) | total) as any);
    return this;
  }

  public remove(...bits: BitFieldResolvable<S, N>[]): this {
    const ctor = this.constructor as unknown as BitFieldConstructor<S, N>;
    let total: any = ctor.defaultBit;
    for (const bit of bits) {
      total |= ctor.resolve(bit);
    }
    if (Object.isFrozen(this)) return new ctor(((this.bitfield as any) & ~total) as any) as this;
    this.bitfield = (((this.bitfield as any) & ~total) as any);
    return this;
  }

  public serialize(): Record<S, boolean> {
    const ctor = this.constructor as unknown as BitFieldConstructor<S, N>;
    const serialized = {} as Record<S, boolean>;
    for (const [flag, bit] of Object.entries(ctor.FLAGS) as [S, N][]) serialized[flag] = this.has(bit);
    return serialized;
  }

  public toArray(): S[] {
    const ctor = this.constructor as unknown as BitFieldConstructor<S, N>;
    return (Object.keys(ctor.FLAGS) as S[]).filter(bit => this.has(bit));
  }

  public toJSON(): N | string {
    return typeof this.bitfield === 'number' ? this.bitfield : this.bitfield.toString();
  }

  public valueOf(): N {
    return this.bitfield;
  }

  public *[Symbol.iterator](): IterableIterator<S> {
    yield* this.toArray();
  }

  public static resolve<S extends string, N extends number | bigint>(
    this: BitFieldConstructor<S, N>,
    bit: BitFieldResolvable<S, N> = this.defaultBit,
  ): N {
    const { defaultBit } = this;
    if (typeof defaultBit === typeof bit && (bit as any) >= defaultBit) return bit as N;
    if (bit instanceof BitField) return bit.bitfield as N;
    if (Array.isArray(bit)) return (bit as any[]).map(p => this.resolve(p)).reduce((prev: any, p: any) => prev | p, defaultBit);
    if (typeof bit === 'string') {
      if (!Number.isNaN(Number(bit))) return (typeof defaultBit === 'bigint' ? BigInt(bit) : Number(bit)) as N;
      if (this.FLAGS[bit as unknown as S] !== undefined) return this.FLAGS[bit as unknown as S];
    }
    throw new RangeError('BITFIELD_INVALID', bit);
  }
}

export default BitField;
