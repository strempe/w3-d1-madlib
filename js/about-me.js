var moment = require('moment');

var firstName = 'Sara';
var lastName = 'Trempe';
var fullName = firstName + ' ' + lastName;

var emailAddress = '88.trempe.sara@gmail.com';

var grewUpInCity = true; 

var yearsInCollege = 6;

var pets = 3;

var averageSleep = 7.5;

var favoriteGenre = 'Jazzy Hip-Hop';

var favoriteShowsMovies = ['Broadcity', 'WestWorld', 'Workaholics', 'Noisey', 'People Just Do Nothing', 'The IT Crowd'];

var jobTitle2022; 

var withOutJS = null;

// var graduationDate = new Date();
// graduationDate.setFullYear(2006);
// graduationDate = graduationDate.getFullYear();

// Epic
var graduationDate = moment().format('2006');

console.log(fullName);
console.log(emailAddress);
console.log(grewUpInCity);
console.log(yearsInCollege);
console.log(pets);
console.log(averageSleep);
console.log(favoriteGenre);
console.log(favoriteShowsMovies);
console.log(jobTitle2022);
console.log(withOutJS);
console.log(graduationDate);


