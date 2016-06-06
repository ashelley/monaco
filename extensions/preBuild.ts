/**
 * Make modifications to source pre build
 */

// Utilities
declare var require, __dirname;
var fs = require('fs');
var EOL: string = require('os').EOL;
export function readFile(filePath: string): string {
    return fs.readFileSync(__dirname + '/' + filePath, 'utf8');
}
export function writeFile(filePath: string, content: string) {
    fs.writeFileSync(__dirname + '/' + filePath, content);
}

var lineFixes = [{
    fileName: '../vscode/gulpfile.js',
    orig: `var declaration = !!process.env['VSCODE_BUILD_DECLARATION_FILES']`,
    new: `var declaration = true;`
}];

for (let fix of lineFixes) {
    writeFile(fix.fileName, readFile(fix.fileName).replace(fix.orig, fix.new));
}
