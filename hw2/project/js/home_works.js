//homework 1.1

const gmailInput = document.querySelector(`#gmail_input`);
const gmailButton = document.querySelector(`#gmail_button`);
const gmailResult = document.querySelector(`#gmail_result`);

const regExp =  /^[a-zA-Z0-9._-]+@gmail.com$/;

gmailButton.addEventListener(`click` ,  () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = `OK`
        gmailResult.style.color = `green`
    }else{
        gmailResult.innerHTML = ` NOT OK`
        gmailResult.style.color = `red`
    }
})

//homework 1.2 (part 1)

// const parentBlock = document.querySelector('.parent_block');
// const childBlock = document.querySelector('.child_block');
// const targetPosition = 450;
//
// const right = () => {
//   let currentPosition = 0;
//
//   const animate = () => {
//     if (currentPosition < targetPosition) {
//       childBlock.style.left = `${currentPosition}px`;
//       currentPosition++;
//       requestAnimationFrame(animate);
//     }
//   };
//   animate();
// };
// right();

//homework 1(part-2)
const childBlock = document.querySelector('.child_block');
let positionX = 0;
let positionY = 0;
const targetPosition = 449;

const moveChildBlock = () => {
    if (positionX <= targetPosition && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX >= targetPosition && positionY <= targetPosition) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    } else if (positionX >= 1 && positionY >= targetPosition ) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    }else if (positionX >= 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }
    setTimeout(moveChildBlock , 5)
};
moveChildBlock();


//homework - 2
const minutesBlock = document.querySelector(`#minutes`);
const secondsBlock = document.querySelector(`#seconds`);
const hundredthsSecondBlock = document.querySelector(`#hundredths-second`);
const btnStart = document.querySelector(`#start`);
const btnStop = document.querySelector(`#stop`);
const btnReset = document.querySelector(`#reset`);

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const startTimer = () => {
    milliseconds++;

    if (milliseconds <= 99){
        hundredthsSecondBlock.innerHTML = milliseconds;
    }
    if (milliseconds === 100){
        hundredthsSecondBlock.innerHTML = `00`;
    }
    if (milliseconds > 99){
        seconds++
        secondsBlock.innerHTML = `0`+seconds;

        milliseconds = 0;
    }
    if (seconds > 9){
        secondsBlock.innerHTML = seconds;
    }
    if (seconds > 59){
        minutes++
        minutesBlock.innerHTML = `0` +minutes;

        seconds = 0;
        secondsBlock.innerHTML = `0` +seconds
    }
    if (minutes > 9){
        minutesBlock.innerHTML = minutes;
    }
}

btnStart.addEventListener(`click` , () => {
    clearInterval(interval)
    interval = setInterval(startTimer , 10)
})
btnStop.addEventListener(`click` , () => {
    clearInterval(interval);
})
btnReset.addEventListener(`click` , () => {
    clearInterval(interval);
     minutes = 0;
     seconds = 0;
     milliseconds = 0;

     minutesBlock.innerHTML = `00`
    secondsBlock.innerHTML = `00`
    hundredthsSecondBlock.innerHTML =`00`
});








