
    let inputNumber = document.querySelector('#inputNumber');
    let startGameButton = document.querySelector('#startGameButton');
    let countS = document.querySelector('#countS');
    let countL = document.querySelector('#countL');
    let sumS = 0;
    let sumL = 0;
    startGameButton.addEventListener('click', startGame)

    function startGame() {

      if (!inputNumber.value) {
        document.querySelector('#timeUp').innerHTML = `Set the time first`;
      } else if (Number(inputNumber.value) === 0) {
        document.querySelector('#timeUp').innerHTML = `You did not provide enough gaming time`;
      } else if (Number(inputNumber.value)<0){
        document.querySelector('#timeUp').innerHTML = `Invalid time`;
      } else {
        document.addEventListener('keypress', logKey);
        function logKey(event) {
          const letter = (event.key).toLowerCase();
          if (letter === 's') {
            sumS++;
            countS.textContent = sumS
          } else if (letter === 'l') {
            sumL++;
            countL.textContent = sumL
          } else {
            document.querySelector('#timeUp').innerHTML = ` key "${letter}" Pressed , instead press ${'s'} , ${'l'} key to play the game !`;
          }
        }

        setTimeout(function () {
          startGameButton.removeEventListener('click', startGame)
        }, Number(inputNumber.value) * 1000);

        setTimeout(function () {
          if ((sumS === 0) && sumL === 0) {
           
            document.querySelector('#timeUp').innerHTML = `Not pressed S or L key. Time is out`;
          } else if (sumS > sumL) {
            countS.innerHTML = `⛳ ${sumS}` ;
            document.querySelector('#timeUp').innerHTML = `S wins with ${sumS - sumL} point`;
          } else if (sumS < sumL) {
            countL.innerHTML = `⛳ ${sumL}` ;
            document.querySelector('#timeUp').innerHTML = `L wins with ${sumL - sumS} point`;
          } else if (sumS === sumL) {
            document.querySelector('#timeUp').innerHTML = `Same score`;
          }
          startGameButton.innerHTML= 'Re-Play Game';
          document.removeEventListener('keypress', logKey)
        }, Number(inputNumber.value) * 1000);

        var timeleft = Number(inputNumber.value);
        var GameTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(GameTimer);
            document.getElementById("countdown").innerHTML = `Time Finished`;
          } else {
            document.getElementById("countdown").innerHTML = timeleft + `seconds remaining`;
          }
          timeleft -= 1;
        }, 1000);

        startGameButton.addEventListener('click',function(){
          window.location.reload(true)
          startGameButton.addEventListener('click', startGame);
          }
          );
      }

    }
