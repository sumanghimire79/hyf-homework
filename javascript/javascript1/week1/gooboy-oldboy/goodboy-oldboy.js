/*suman ghimire javascript w1 homework Goodboy-Oldboy (A dog age calculator) */

const dogYearOfBirth = 2020;
const dogYearFuture = 2045;
const normalYear = dogYearFuture - dogYearOfBirth;
const dogYear = 7 * normalYear; // dogyear in relation to human year. 1 human year equals 7 dog years !!
const shouldShowResultInDogYears = true; 

if (shouldShowResultInDogYears){
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture );
}else {
    console.log("Your dog will be " + ownDogYear + " human years old in " + dogYearFuture);
}
