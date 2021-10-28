/* Suman Ghimire javascript w1 Housey pricey (A house price estimator) */

// peaters house measurement 
let houseWidthInM2 = 8;
let houseDepthInM2 = 10;
let houseHeighthInM2 = 10;
let gardenSizeInM2 = 100;
const  normalPriceOfPeter = 2500000; 
let volumeInMeters = houseWidthInM2 * houseDepthInM2 * houseHeighthInM2;

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
//Math.abs()
let paidMore = Math.abs(housePrice - normalPriceOfPeter);
let paidLess = Math.abs(normalPriceOfPeter - housePrice);

console.log(" * The calculated price of the Peter's is "+ housePrice + " !!!");

if (housePrice == normalPriceOfPeter){
    console.log ("Peter paid " + normalPriceOfPeter + ". That means he paid the correct price of the house." );
} else if (housePrice > normalPriceOfPeter){
    console.log( "Peter paid " + normalPriceOfPeter + ". That means he paid " + paidMore +  " more than the normal price of the house." );
} else if (housePrice < normalPriceOfPeter){
    console.log ("Peter paid " + normalPriceOfPeter + ". That means he paid " + paidLess +  " less than the normal price of the house." );
} else {
    console.log ("Peter did not buy the house" );
}

// julia house measurement 

houseWidthInM2 = 5;
houseDepthInM2 = 11;
houseHeighthInM2 = 8;
gardenSizeInM2 = 70;
const normalPriceOfJulia = 1000000; 

volumeInMeters = houseWidthInM2 * houseDepthInM2 * houseHeighthInM2;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

volumeInMeters = houseWidthInM2 * houseDepthInM2 * houseHeighthInM2;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);

// Math.abs()
paidMore = Math.abs(housePrice - normalPriceOfJulia);
paidLess = Math.abs( normalPriceOfJulia - housePrice);

console.log(" ** The calculated price of the Julia's is "+housePrice + " !!!");

if (housePrice == normalPriceOfJulia){
    console.log ("Julia paid " + normalPriceOfJulia + ". That means she paid the correct price of the house." );
} else if (housePrice > normalPriceOfJulia){
    console.log( "Julia paid " + normalPriceOfJulia + ". That means she paid " + paidMore +  " more than the normal price of the house." );
} else if (housePrice < normalPriceOfJulia){
    console.log ("Julia paid " + normalPriceOfJulia + ". That means she paid " + paidLess +  " less than the normal price of the house." );
} else {
    console.log ("Julia did not buy the house" );
}

