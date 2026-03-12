const fs = require('fs');
let content = fs.readFileSync('src/util/BitField.ts', 'utf8');

content = content.replace("new ctor((this.bitfield as any | total) as any)", "new ctor(((this.bitfield as any) | total) as any)");
content = content.replace("this.bitfield = (this.bitfield as any | total) as any;", "this.bitfield = (((this.bitfield as any) | total) as any);");

content = content.replace("new ctor((this.bitfield as any & ~total) as any)", "new ctor(((this.bitfield as any) & ~total) as any)");
content = content.replace("this.bitfield = (this.bitfield as any & ~total) as any;", "this.bitfield = (((this.bitfield as any) & ~total) as any);");

fs.writeFileSync('src/util/BitField.ts', content);
