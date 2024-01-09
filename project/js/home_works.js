//homework 1
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

//homework 2
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');
const targetPosition = 450;

const right = () => {
  let currentPosition = 0;

  const animate = () => {
    if (currentPosition < targetPosition) {
      childBlock.style.left = `${currentPosition}px`;
      currentPosition++;
      requestAnimationFrame(animate);
    }
  };
  animate();
};
right();