
// exercise 1
    // Using async await: fetch yes or no from this api: https://yesno.wtf/api. log out the answer

async function getAstronauts() {
    try {
        const astronautsResponse = await fetch("https://yesno.wtf/api");
        const astronauts = await astronautsResponse.json();
        console.log(astronauts.answer);
        return astronauts;
    } catch(err) {
        throw "Fetchin the astronauts went wrong";
    }
  }
  
  const astronauts = getAstronauts();
  console.log('exercise 1 ==',astronauts.answer);