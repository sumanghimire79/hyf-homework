/*suman ghimire javascript w1 homework goodboy-oldboy */
const yearOfBirth = 1979;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);

const dogYearOfBirth = 2020;
const dogYearFuture = 2045;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true; 

if (shouldShowResultInDogYears){
    console.log("Your dog will be " + dogYear + " human years old in " + yearFuture);
}else {
    console.log("Your dog will be " + age + " years old in " + yearFuture);
}
