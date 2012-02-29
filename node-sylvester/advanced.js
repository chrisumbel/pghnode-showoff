require('sylvester');

var a = $M([
    [1, 2, 1],
    [2, 3, 1],
    [3, 5, 2]
]);

console.log(a.svd());
console.log('------------------------------');
console.log(a.lu());
