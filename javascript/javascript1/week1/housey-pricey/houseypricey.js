
// peaters house measurement 
let houseWidthInM2 = 8;
let houseDepthInM2 = 10;
/* Suman Ghimire javascript w1 (Housey pricey) */
let houseHeighthInM2 = 10;
let gardenSizeInM2 = 100;
const  normalPriceOfPeter = 2500000; 
let volumeInMeters = houseWidthInM2 * houseDepthInM2 * houseHeighthInM2;

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let paidMore = housePrice - normalPriceOfPeter;
let paidLess = normalPriceOfPeter - housePrice;

console.log(" * The calculated price of the Peter's is "+housePrice + " !!!");

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

paidMore = housePrice - normalPriceOfJulia;
paidLess = normalPriceOfJulia - housePrice;

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

