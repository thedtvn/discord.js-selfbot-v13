const fs = require('fs');
let content = fs.readFileSync('src/util/BitField.ts', 'utf8');

content = content.replace(/let total = ctor\.defaultBit;/g, "let total: any = ctor.defaultBit;");

content = content.replace(/if \(typeof defaultBit === typeof bit && bit >= defaultBit\) return bit as N;/g, 
  "if (typeof defaultBit === typeof bit && (bit as any) >= defaultBit) return bit as N;");

content = content.replace(/bit\.map\(p => this\.resolve\(p\)\)\.reduce\(\(prev, p\) => prev \| p, defaultBit\)/g, 
  "(bit as any[]).map(p => this.resolve(p)).reduce((prev: any, p: any) => prev | p, defaultBit)");

content = content.replace(/this\.FLAGS\[bit\] !== undefined/g, "this.FLAGS[bit as unknown as S] !== undefined");
content = content.replace(/return this\.FLAGS\[bit\]/g, "return this.FLAGS[bit as unknown as S]");

// Wait, the `|` operator also happens in `this.bitfield |= total` and `new ctor(this.bitfield | total)` and `this.bitfield &= ~total` etc.
// But `this.bitfield` is type `N`. If `total` is `any`, `this.bitfield |= total` might still complain if it's strictly `N`.
// Let's check the exact errors.

fs.writeFileSync('src/util/BitField.ts', content);
