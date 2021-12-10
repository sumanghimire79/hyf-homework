
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
            document.querySelector('#timeUpX').innerHTML = ` you pressed "${letter}" but , only ${'s'} , ${'l'} are counted !`;
        
          }
        }

        setTimeout(function () {
          startGameButton.removeEventListener('click', startGame)
        }, Number(inputNumber.value) * 1000);

        setTimeout(function () {
          if (sumL === 0 && sumS === 0) {
            document.querySelector('#timeUpNotPressed').innerHTML = `Not pressed S or L key`;
          }else if (sumS > sumL) {
            countS.innerHTML = `⛳ ${sumS}` ;
            document.querySelector('#timeUpR').innerHTML = `S wins with ${sumS - sumL} point`;
          } else if (sumS < sumL) {
            countL.innerHTML = `⛳ ${sumL}` ;
            document.querySelector('#timeUpR').innerHTML = `L wins with ${sumL - sumS} point`;
          } else if (sumS === sumL) {
            document.querySelector('#timeUpR').innerHTML = `Same score`;
          }
          document.querySelector('#timeUpX').innerHTML= '';
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
