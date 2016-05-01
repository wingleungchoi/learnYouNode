// task 3
// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]);
// var string = buffer.toString();
// var lines  = string.split('\n');
// var numberOfNewLines = lines.length - 1;
// console.log(numberOfNewLines);

// task 4
// var fs     = require('fs');
// function logNumberOfNewLines(numberOfNewLines){
//   console.log(numberOfNewLines);
// };
// function countNumberOfNewLines(callback) {
//   fs.readFile(process.argv[2], { encoding: 'utf8' }, function (err, data) {
//     if (err) {
//       throw err;
//     } else{
//       var lines  = data.split('\n');
//       var numberOfNewLines = lines.length - 1;
//       callback(numberOfNewLines);
//     };
//   });
// };

// countNumberOfNewLines(logNumberOfNewLines);



// task 5
// var fs         = require ('fs');
// var path       = require ('path');
// var pathToDir  = process.argv[2];
// var extname    = process.argv[3];

// function readdirCallback (err, fileNames) {
//   if (err) {
//     throw err;
//   } else{
//     for (i = 0; i < fileNames.length; i++) {
//       if (path.extname(fileNames[i]) == ('.' + extname)) {
//         console.log(fileNames[i]);
//       };
//     };
//   };
// };

// function filesWithExtname(path, extname) {
//   fs.readdir(path, readdirCallback);
// };

// filesWithExtname(pathToDir,extname);


// task 6
// var path       = require ('path');
// var pathToDir  = process.argv[2];
// var extname    = process.argv[3];
// var myModule   = require('./myModule.js');

// function readdirCallback (err, fileNames) {
//   if (err) {
//     throw err;
//   } else{
//     for (i = 0; i < fileNames.length; i++) {
//       if (path.extname(fileNames[i]) === ('.' + extname)) {
//         console.log(fileNames[i]);
//       };
//     };
//   };
// };

// myModule(pathToDir, extname, readdirCallback);
