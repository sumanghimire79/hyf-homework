const canvas = document.querySelector('#myCanvas2');
        canvas.setAttribute('height',500)
        canvas.setAttribute('width',500)
        const myContext = canvas.getContext('2d');

class Circle2 {

    constructor(x, y, r, startAngle, endAngle,fillColor) {
        this.x = x,
            this.y = y,
            this.r = r,
            this.startAngle = startAngle,
            this.endAngle= endAngle,
            this.fillColor = fillColor
    }

    draw(){
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        canvas.style.background = randomColor
        
        myContext.beginPath();
        myContext.arc(this.x, this.y, this.r, this.startAngle,this.endAngle);
        
        myContext.stroke();
        myContext.fillStyle = this.fillColor;
        myContext.fill();
    }
}


// creating circle class instances (objects) and calling the draw metod
const c5 = new Circle2(50, 50, 30, 0, 2 * Math.PI, "#000000");
c5.draw();
const c6 = new Circle2(150, 150, 50, 0, 2 * Math.PI, "#777777");
c6.draw();
const c7 = new Circle2(250, 250, 70, 0, 2 * Math.PI, "#555555");
c7.draw();

// using setinterval method to display random size,random color, random location in defined internal of time 
setInterval(() => {
// const xRandom = Math.floor(Math.random()*screen.width);
// const yRandom = Math.floor(Math.random()*screen.height);
const xRandom = Math.floor(Math.random()*500);
const yRandom = Math.floor(Math.random()*500);
const rRandom = Math.floor((Math.random()*80)+20);

const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

const c8 = new Circle2(xRandom, yRandom, rRandom, 0, 2 * Math.PI, randomColor);
c8.draw();
}, 2000);

// rendered function do display circle as the mouse pointer moves .. getting x and y location as the mouse pointerr 
document.getElementById("myCanvas2").addEventListener("mousemove", 
    function(event){
        console.log(event);
        var x = event.clientX;
        var y = event.clientY;
        // var x = event.screenX;
        // var y = event.screenY;
        // const x = event.x
        // const y = event.y
        // const x = event.pageX
        // const y = event.pageY
        
        // const rRandom = Math.floor((Math.random()*80)+20);
        const rRandom = 50;
        // const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const randomColor = 'white';
        const c9 = new Circle2(x, y, rRandom, 0, 2 * Math.PI, randomColor);
        c9.draw();
       
  }
);

    
    
  











