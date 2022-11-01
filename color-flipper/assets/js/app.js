const colors = ['rgb(0, 204, 102)', 'blue', 'rgba(133,122,200)', '#f15025', 'yellow'];

//target button and color
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//setup event listener, each time button clicked change background color
btn.addEventListener('click', function(){
    //get random number between 0 and 4; colors[]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
} 

