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

// task 7
// var http = require('http');
// var url  = process.argv[2];

// http.get(url, function(response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// });

// task 8
// var concatStream = require("concat-stream");
// var http = require('http');
// var url  = process.argv[2];

// http.get(url, function(response) {
//   response.setEncoding('utf8')
//   response.on('error', console.error)
//   response.pipe(concatStream(function (data) {
//     console.log(data.length);
//     console.log(data);
//   }))
// });



// task 9
// var concatStream = require("concat-stream");
// var http         = require('http');
// var url_1        = process.argv[2];
// var url_2        = process.argv[3];
// var url_3        = process.argv[4];
// var result       = [];
// var successCount = 0;

// function printResultMessage(){
//   for (var i = 0; i < 3; i++) {
//     var message = result[i];
//     console.log(message);
//   }  
// }

// function getHttpContent(url, index){
//   http.get(url, function(response) {
//     response.setEncoding('utf8', getHttpContent);
//     response.on('error', console.error)
//     response.pipe(concatStream(function (data) {
//       console.log(index);
//       console.log(data);
//       result[index] = data;
//       successCount++;
//       if (successCount === 3) {
//         printResultMessage()
//       };
//     }));
//   });
// };
// var urls = [url_1, url_2, url_3]
// for (var i = 0; i < 3; i++) {
//   getHttpContent(urls[i], i);
// };

// task 10
// var portNumber = process.argv[2];
// var net        = require('net')
// var server     = net.createServer(function (socket) {
//   "YYYY-MM-DD hh:mm"
//   date = new Date();
//   data = date.getFullYear() + "-" + ("0" +(date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ( "0" + date.getMinutes()).slice(-2) + "\n"
//   socket.write(data);
//   socket.end();
// })
// server.listen(portNumber);

// task 11
// var port       = process.argv[2];
// var filePath   = process.argv[3];
// var http       = require('http');
// var fs         = require('fs');
// var server     = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   console.log(fs.createReadStream(filePath));
//   var data = '';
//   var readableStream = fs.createReadStream(filePath);
//   readableStream.on('data', function(chunk) {
//       data+=chunk;
//   });

//   readableStream.on('end', function() {
//     res.write(data);
//     res.end();
//   });
// // suggested solution: fs.createReadStream(process.argv[3]).pipe(res) 
// })
// server.listen(port);
