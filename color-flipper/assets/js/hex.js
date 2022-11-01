//hex # + 6 values, 0 - 9, A F represents 10 - 15
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//target button and color
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//setup event listener, each time button clicked change background color
btn.addEventListener('click', function(){
    let hexColor = '#';
    //setup loop that runs 6 times for 6 values
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;  
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}