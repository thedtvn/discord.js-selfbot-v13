export type BitFieldResolvable<S extends string, N extends number | bigint = number> = S | N | `${number}` | BitField<S, N> | readonly BitFieldResolvable<S, N>[];
interface BitFieldConstructor<S extends string, N extends number | bigint> {
    new (bits?: BitFieldResolvable<S, N>): BitField<S, N>;
    FLAGS: Record<S, N>;
    defaultBit: N;
    resolve(bit?: BitFieldResolvable<S, N>): N;
}
declare class BitField<S extends string, N extends number | bigint = number> {
    bitfield: N;
    static FLAGS: Record<string, number | bigint>;
    static defaultBit: number | bigint;
    constructor(bits?: BitFieldResolvable<S, N>);
    any(bit: BitFieldResolvable<S, N>): boolean;
    equals(bit: BitFieldResolvable<S, N>): boolean;
    has(bit: BitFieldResolvable<S, N>): boolean;
    missing(bits: BitFieldResolvable<S, N>): S[];
    freeze(): Readonly<BitField<S, N>>;
    add(...bits: BitFieldResolvable<S, N>[]): this;
    remove(...bits: BitFieldResolvable<S, N>[]): this;
    serialize(): Record<S, boolean>;
    toArray(): S[];
    toJSON(): N | string;
    valueOf(): N;
    [Symbol.iterator](): IterableIterator<S>;
    static resolve<S extends string, N extends number | bigint>(this: BitFieldConstructor<S, N>, bit?: BitFieldResolvable<S, N>): N;
}
export default BitField;
