
/* Suman Ghimire javaScript1 w2 Weather wear */

function dressAdviser(temperature){
let todaysDress;
if (temperature>17){
    todaysDress= "It is a a bit warm today so it is adviced to wear shorts and a t-shirt";
} else {
    todaysDress = "it is a bit colder today so it is adviced to  wear a jacket";
}
    return todaysDress;
}
const clothesToWear = dressAdviser(13);
console.log( clothesToWear);