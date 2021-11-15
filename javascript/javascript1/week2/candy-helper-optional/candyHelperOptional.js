/* /* /* /* Suman Ghimire javascript1 w2 Candy helper optional */

const boughtCandyPrices = [];
const ListOfCandyType = ["Sweet", "Chocolate", "Toffee", "Chewing-gum"]; 

/* 
includes/indexOf method in if/else condition tried but did not work !
it always satisfies the fist line so always adds the price of the first condition???
*/
/* 
function addCandy(candyType, weight) {
    let price;
    for (let i = 0; i < ListOfCandyType.length; i++) {
        if (ListOfCandyType[i].includes("Sweet")) {
            price = 7 * weight;
        } else if (ListOfCandyType[i].includes("Chocolate")) {
            price = 2 * weight;
        } else if (ListOfCandyType[i].includes("Toffee")) {
            price = 1 * weight;
        } else if (ListOfCandyType[i].includes("Chewing-gum")) {
            price = 3 * weight;
        } else {
            price = "price not defined , contact seller";
        } 
    }
    boughtCandyPrices.push(candyType , price);
} 
*/

const boughtCandyPrices1 = [];
function addCandy(candyType, weight) {
    let price;
    switch (candyType) {
        case 'Sweet':
            price = weight * 0.5;
            break;
        case 'Chocolate':
            price = weight * 0.7;
            break;
        case 'Toffee':
            price = weight * 1.1;
            break;
        case 'Chewing-gum':
            price = weight * 0.03;
            break;
        default:
            price = " price not set";
            break;
    }
    boughtCandyPrices.push(candyType , price);
    boughtCandyPrices1.push(price);
} 

addCandy("Sweet", 100);
addCandy("Chocolate", 100);
addCandy("Toffee", 100);
addCandy("Chocolate", 100);
addCandy("Chewing-gum", 100);
console.log(boughtCandyPrices);
console.log(boughtCandyPrices1);

const amountToSpend =  Math.random() * 100;

function canBuyMoreCandy(piecesOfCandy){
    for (let i = 0; i < boughtCandyPrices1.length; i++) {
        let amoutYouHave = boughtCandyPrices1[i]*piecesOfCandy;
        if(amoutYouHave<amountToSpend){
            console.log("yes, you can buy more");
        }else{
             console.log("No, you can not buy more!");
        }
    }
 }
 
 canBuyMoreCandy(2);
 
 console.log(boughtCandyPrices1);
 