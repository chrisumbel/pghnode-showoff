var natural = require('natural'),
  metaphone = natural.Metaphone;

console.log(metaphone.process('forensics'));
console.log(metaphone.process('phorensix'));

if(metaphone.compare('forensics', 'phorensix')) {
    console.log('they sound alike');
} else {
    console.log('they don\'t sound alike');
}
