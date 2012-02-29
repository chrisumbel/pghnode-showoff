require('sylvester');

var a = $M([
    [1, 2],
    [2, 3 ]
]);

var b = $V([3, 7]);

console.log(a.x(b));

console.log('---------');

var c = $M([
    [3, 2],
    [2, 1]
]);

console.log(a.add(c));