var natural = require('natural'),
  classifier = new natural.LogisticRegressionClassifier();

classifier.addDocument('i hope this code works', 'programming');
classifier.addDocument('that module has bugs', 'programming');

classifier.addDocument('the election is a while off', 'politics');
classifier.addDocument('what was the date of the iowa caucuses?', 'politics');

classifier.train();

console.log(classifier.classify('i coded all night'));
