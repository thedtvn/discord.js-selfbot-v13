const fs = require('fs');
const path = require('path');
const dir = './src/structures';

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace `_patch(data: any): void {` with `_patch(data: any): any {`
      let changed = false;
      
      // regex to match `_patch(SOMETHING): void`
      const newContent = content.replace(/_patch\(([^)]*)\):\s*void\s*\{/g, (match, p1) => {
        changed = true;
        
        // Ensure the parameter is at least `any` instead of something specific
        // e.g. p1 might be `data: APIApplicationCommand`
        let newParams = p1;
        
        // Actually the instructions said:
        // Widen the `_patch` method signature to match base class
        // "If subclass has _patch(data: SpecificType), change to _patch(data: any)"
        // "Then narrow inside: const typedData = data as SpecificType;"
        
        // Check if there's a specific type
        if (p1.includes(':') && !p1.includes(': any') && !p1.includes(': unknown')) {
           // We need to change `data: SpecificType` to `data: any`
           const parts = p1.split(':').map(s => s.trim());
           if (parts.length === 2 && !p1.includes(',')) {
             const paramName = parts[0];
             const paramType = parts[1];
             newParams = `${paramName}: any`;
             return `_patch(${newParams}): any {\n    const typedData = ${paramName} as ${paramType};`;
           }
        }
        
        return `_patch(${newParams}): any {`;
      });
      
      if (changed) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed ${fullPath}`);
      }
    }
  }
}

processDir(dir);
