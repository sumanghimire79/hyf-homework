/* Suman Ghimire javascript1 w2 Candy helper optional */
const boughtCandyPrices = [];
const ListOfCandyType = ["Sweet","Chocolate","Toffee","Chewing-gum"]

/* 
includes/indexOf method in if/else condition tried but did not work !
it always satisfies the fist line so always adds the price of the first condition???
*/
/*
function addCandy(candyType,weight){
    let price;
    if (ListOfCandyType.includes ("Sweet")){
         price = 7 * weight;
         boughtCandyPrices.push(candyType,price);
    }else if (ListOfCandyType.includes("Chocolate")){
        price = 2 * weight;
        boughtCandyPrices.push(candyType,price);
    }else if ( ListOfCandyType.includes("Toffee")){
        price = 1 * weight;
        boughtCandyPrices.push(candyType,price);
    }else if ( ListOfCandyType.includes("Chewing-gum"))
    {   price = 3 * weight;
    } else {
        price = "price not defined , contact seller"
    } 
} */

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
            price = "Ask  for price"
            break;
    }
    boughtCandyPrices.push(candyType , price);
}
console.log("Available candy types: "+ ListOfCandyType);
addCandy("Sweet",100);
console.log(boughtCandyPrices);
addCandy("Chocolate",100);
console.log(boughtCandyPrices);
addCandy("Toffee",10);
console.log(boughtCandyPrices);
addCandy("Chewing-gum",100);
console.log(boughtCandyPrices);
addCandy("gum",100);
console.log(boughtCandyPrices);