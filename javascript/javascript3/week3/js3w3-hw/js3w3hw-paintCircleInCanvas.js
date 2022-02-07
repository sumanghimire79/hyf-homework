
// Paint a circle to a canvas element

let myCanvas1 = document.getElementById("myCanvas1");
myCanvas1.setAttribute('width',500)
myCanvas1.setAttribute('height',500)

let context = myCanvas1.getContext("2d");

context.beginPath();
let circle = context.arc(70, 75, 50, 0, 2 * Math.PI,'#000000');
context.lineWidth=15;
context.strokeStyle="blue";
context.fillStyle = 'red'
context.fill();
context.stroke();
// repeatedly copy/paste this code if needed to make many circles. 
// this problem can be solved by creating  class, methods and then creating as many as instances(objecs) of the Cirlce (class)



let myCanvas11 = document.getElementById("myCanvas1");
myCanvas11.setAttribute('width',500)
myCanvas11.setAttribute('height',500)

//Class creation time!
class Circle {
constructor(x,y,r,startAngle,endAngle,fillColor,strokeColor){
this.x = x,
this.y = y,
this.r = r,
this.startAngle = startAngle,
this.endAngle = endAngle,
this.fillColor = fillColor
this.strokeColor = strokeColor
}

draw(){
// get the html element, set hetight/weitht is taken out of the class.
// if not taken out of class then only the last cirle is printe out
let context11 = myCanvas11.getContext("2d");    
context11.beginPath();
let circle11 = context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
context11.lineWidth=5;
context11.strokeStyle=this.strokeColor;
context11.fillStyle = this.fillColor
context11.fill();
context11.stroke();
}
}

const c1 = new Circle(100, 100, 50, 0, 2 * Math.PI, "red",'yellow');
const c2 = new Circle(150, 110, 40, 0, 2 * Math.PI, "yellow",'blue');
const c3 = new Circle(200, 120, 30, 0, 2 * Math.PI, "red");
const c4 = new Circle(250, 130, 20, 0, 2 * Math.PI, "white");

const c11 = new Circle(100, 200, 30, 0, 2 * Math.PI, "#000000",'yellow');
const c22 = new Circle(150, 220, 40, 0, 2 * Math.PI, "#777777",'blue');
const c33 = new Circle(200, 240, 50, 0, 2 * Math.PI, "#555555");


setInterval(() => {
    // setinterval is printing the same in same location 
    //so it doesnot seems changing or printing in every interval of defined time
    // console.log() can be used to see if actually setinterval is functioning
    // we can use random method to to provide the random parameter of x,y,radios,color to really visualize the changes 
    
c1.draw();
c2.draw();
c3.draw();
c4.draw();

c11.draw();
c22.draw();
c33.draw();

}, 3000);  



 