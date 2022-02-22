let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

if ( num >= 90 ) {
    console.log('A')
} else if ( 89 >= num && num >= 80 ) {
    console.log('B')
} else if ( 79 >= num && num >= 70 ) {
    console.log('C')
} else if ( 69 >= num && num >= 60 ) {
    console.log('D')
} else {
    console.log('F')
}