


// This code will move the li to the new x,y position of the circle
// Calling moveElement will return a promise that resolves after the li element has been moved.

// translateOneByOne using promise .then/.catch function;
; (() => {
    // moveElement is a function with two parameters : 1.boxtoMove- which is queryselected ; 2.newPosition- which is basically new x,y location 
    moveElement(document.querySelector(".marks li:nth-child(1)"), { x: 20, y: 300 })
        .then(() => { console.log("Red has been moved"); })
        .then(() => {
            moveElement(document.querySelector(".marks li:nth-child(2)"), { x: 400, y: 300 })
            .then(() => { console.log("Blue has been moved"); })
            .then(() => {
                moveElement(document.querySelector(".marks li:nth-child(3)"), { x: 400, y: 20 })
                .then(() => { console.log("Green has been moved"); })
                .catch(error => { console.log('element did not moved', error); });
            });
        })
})// one by one 
// () 

    // translateAllAtOnce using promise .then/.catch function;
    ; (() => {
        const promise1 = moveElement(document.querySelector(".marks li:nth-child(1)"), { x: 20, y: 300 })
            .then(() => { console.log("Red has been moved"); })
        const promise2 = moveElement(document.querySelector(".marks li:nth-child(2)"), { x: 400, y: 300 })
            .then(() => { console.log("Blue has been moved"); })
        const promise3 = moveElement(document.querySelector(".marks li:nth-child(3)"), { x: 400, y: 20 })
            .then(() => { console.log("Green has been moved"); }).then(()=>{
                Promise.all([promise1, promise2, promise3]).then((values) => {
                    console.log(values);
                })
            })
       
        .catch((err) => { console.log('error: could not get' + err); });

    })// all at a time Promise.all
    // ()  

    // translate One By One async/await way
    ; (async () => {
        try {
            await moveElement(document.querySelector(".marks li:nth-child(1)"), { x: 20, y: 300 })
            console.log("red has been moved");
            await moveElement(document.querySelector(".marks li:nth-child(2)"), { x: 400, y: 300 })
            console.log("blue has been moved");
            await moveElement(document.querySelector(".marks li:nth-child(3)"), { x: 400, y: 20 })
            console.log("green has been moved");

        } catch (error) {
            console.log('element did not moved', error);
        }

    })// one at a time
    // (); 

    //translateAllAtOnce async/await way
    ; (async () => {
        try {
            const promise1 =  moveElement(document.querySelector(".marks li:nth-child(1)"), { x: 20, y: 300 })
            const promise2 =  moveElement(document.querySelector(".marks li:nth-child(2)"), { x: 400, y: 300 })
            const promise3 =  moveElement(document.querySelector(".marks li:nth-child(3)"), { x: 400, y: 20 })
            
            await Promise.all([promise1, promise2, promise3])
            console.log(" all element has been moved");

        } catch (error) {
            console.log('element did not moved', error);
        }
    })// all in one time 
(); 