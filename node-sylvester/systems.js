require('sylvester');

// Ax = b
// -3x + 5y = 12
//  3x + 2y = 9

var A = $M([
    [-3, 5], 
    [ 3, 2]
]);
var b = $V([12, 9]);

console.log(A.solve(b));
