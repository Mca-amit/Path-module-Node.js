
const path=require("path");
// console.log(path);
// console.log(path.sep);
// console.log(process.env.PATH);
// console.log(path.delimiter);

const currentFilePath = __filename;
console.log(currentFilePath);

let basename=path.basename(currentFilePath);
console.log(basename);

let basenameWithoutExt=path.basename(currentFilePath,'.js');
console.log(basenameWithoutExt);

let dirname=path.dirname(currentFilePath);
console.log(dirname);

console.log('ext >',path.extname(currentFilePath));
console.log('ext >',path.extname('index.md.js'));

let pathToFile=path.format({
    dir:'C:\Users\amitk\Downloads\Node js tutorial\path',
    base:'index.js'
})
console.log(pathToFile);

console.log(path.isAbsolute(currentFilePath));//absolute path because it starts from root directory
console.log(path.isAbsolute('C:\\Users\\amitk'));//absolute path because it starts from root directory
console.log(path.isAbsolute('amitk\\Downloads'));//relative path because it does not starts from root directory

console.log(path.join('C:','Users','amitk','Downloads','Node js tutorial','path','index.js'));

console.log(path.parse(currentFilePath));

console.log(path.relative('amitk\\downloads\\nodejstutorial','amitk\\downloads\\path'));//determine the relative path from one location to another location

console.log(path.normalize('amitk\\\downloads\\\ nodejstutorial'));

console.log(path.resolve());
