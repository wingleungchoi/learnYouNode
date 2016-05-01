// task 3
// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]);
// var string = buffer.toString();
// var lines  = string.split('\n');
// var numberOfNewLines = lines.length - 1;
// console.log(numberOfNewLines);

var fs     = require('fs');
function logNumberOfNewLines(numberOfNewLines){
  console.log(numberOfNewLines);
};
function countNumberOfNewLines(callback) {
  fs.readFile(process.argv[2], { encoding: 'utf8' }, function (err, data) {
    if (err) {
      throw err;
    } else{
      var lines  = data.split('\n');
      var numberOfNewLines = lines.length - 1;
      callback(numberOfNewLines);
    };
  });
};

countNumberOfNewLines(logNumberOfNewLines);