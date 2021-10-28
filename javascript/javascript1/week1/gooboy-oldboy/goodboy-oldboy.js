/*suman ghimire javascript w1 homework Goodboy-Oldboy (A dog age calculator) */
const yearOfBirth = 1979;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);

const dogYearOfBirth = 2020;
const dogYearFuture = 2045;
const ownDogYear = dogYearFuture - dogYearOfBirth;
const dogYear = 7 * ownDogYear; // dogyear in relation to human year. 1 human year equals 7 dog years !!
const shouldShowResultInDogYears = true; 

if (shouldShowResultInDogYears){
    console.log("Your dog will be " + dogYear + " dog years old in " + yearFuture + ". which is equal to " + ownDogYear + " human year .");
}else {
    console.log("Your dog will be " + ownDogYear + " human years old in " + yearFuture);
}
