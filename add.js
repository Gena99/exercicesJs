// print process.argv
//process.argv.forEach(function (val, index, array) {
  //console.log(index + ': ' + val);
//});
console.log(process.argv[2]);
console.log(process.argv[3]);
var num = parseInt(process.argv[2])
var num1 = parseInt(process.argv[3]);
console.log(num+num1);
