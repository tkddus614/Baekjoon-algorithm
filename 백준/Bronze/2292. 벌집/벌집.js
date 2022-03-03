const input = require('fs').readFileSync('/dev/stdin');

let i = 1, sum = 1;

while (sum < input) {    
	sum += 6 * i;

	i++;
}

console.log(i);