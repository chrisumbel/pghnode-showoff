var natural = require('natural'),
  porterStemmer = natural.PorterStemmer;

console.log(porterStemmer.stem('castigation'));
console.log(porterStemmer.stem('castigator'));

porterStemmer.attach();

if('castigation'.stem() == 'castigator'.stem()) {
    console.log('they have the same root');
} else {
    console.log('they don\'t have the same root');
}
