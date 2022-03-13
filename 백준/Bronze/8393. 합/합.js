const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim(); 

let number = Number(input) 

let answer = 0; 

for(let i = 1; i <= number; i++) { 
    answer += i 
} 

console.log(answer);
