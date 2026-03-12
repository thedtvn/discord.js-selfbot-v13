const fs = require('fs');
let content = fs.readFileSync('src/util/BitField.ts', 'utf8');

// Revert
content = content.replace(/new ctor\(\(this\.bitfield as any \| total\) as any\)/g, "new ctor(((this.bitfield as any) | total) as any)");
content = content.replace(/this\.bitfield = \(\(this\.bitfield as any \| total\) as any\);/g, "this.bitfield = (((this.bitfield as any) | total) as any);");

content = content.replace(/new ctor\(\(this\.bitfield as any & ~total\) as any\)/g, "new ctor(((this.bitfield as any) & ~total) as any)");
content = content.replace(/this\.bitfield = \(\(this\.bitfield as any & ~total\) as any\);/g, "this.bitfield = (((this.bitfield as any) & ~total) as any);");

// Actually just to be safe, I'll read and rewrite.
