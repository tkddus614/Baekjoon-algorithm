let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let a = parseInt(input[0]);

function solution () {
  let result = '';
  for(let i = 1; i <= a; i++) {
    result = result + `${i} \n`;
  }
  console.log(result);
}
solution();