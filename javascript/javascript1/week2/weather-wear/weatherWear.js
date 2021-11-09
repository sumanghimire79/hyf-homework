
/* Suman Ghimire javaScript1 w2 Weather wear */

function dressAdviser(temperature) {
    let todaysDress;
    if (temperature > 0) {
        if (temperature < 5) {
            todaysDress = "temperatue can go upto 0 degree so wear a warm cloths ";
        } else if (temperature < 10) {
            todaysDress = "temperature can be 5 to 10 degree, so wear warm colthes";
        } else if (temperature < 20) {
            todaysDress = " temperatue can be between 10 to 20 degree.  adviced to wear thin jacket ";
        } else if (temperature < 30) {
            todaysDress = "It is a a bit warm today so it is adviced to wear shorts and a t-shirt";
        } else {
            todaysDress = " it very hot today, adviced to seat inside AC or take an sun-umbrella if you need to go outside"
        }
    } else {
        todaysDress = "it is very cold today so it is adviced to  wear a thick jacket,gloves, cap , muffler and warm shoes";
    }
    return todaysDress;
}
const clothesToWear = dressAdviser(9);
console.log(clothesToWear);