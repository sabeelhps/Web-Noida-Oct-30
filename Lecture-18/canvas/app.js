const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');

pen.fillStyle = 'yellow';

let intital_x = 0;
let initial_y = 100;

const W = 1200;
const H = 735;


// used to initialise the game with initial properties
function init() {
    pen.fillRect(intital_x, initial_y, 49, 49);
    draw();
}


// draw the updated figures on the canvas
function draw() {
    pen.clearRect(0, 0, W, H); //erase all the rectangle starting from {0,0} to {W,H}
    pen.fillRect(intital_x, initial_y, 49,49);
}


// update the game

function update() {
    intital_x = intital_x + 50;
}

function gameLoop() {
    update();
    draw();
    console.log('Inside Game Loop');
}

init();


const id = setInterval(gameLoop, 200);





