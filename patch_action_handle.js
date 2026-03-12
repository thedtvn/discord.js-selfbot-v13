const fs = require('fs');
let code = fs.readFileSync('src/client/actions/Action.ts', 'utf8');

code = code.replace(
  'handle(data: any): any {\n    return data;\n  }',
  'handle(...args: any[]): any {\n    return args[0];\n  }'
);

fs.writeFileSync('src/client/actions/Action.ts', code);
