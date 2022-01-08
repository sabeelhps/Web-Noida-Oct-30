const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';
// Height and Width of the canvas
const W = 1200;
const H = 735;
const cs = 67; //size of the cell i.e height=67 and width=67



class Snake{

    constructor() {
        this.init_len = 5;
        this.direction = 'right';
        this.cells = [];
    }

    createSnake() {
        for (let i = 0; i < this.init_len; i++) {
            this.cells.push({ x: i, y: 0 });
        }
    }
    drawSnake() {
        for (let cell of this.cells) {
            pen.fillRect(cell.x*cs, cell.y*cs, cs-2, cs-2);
        }
    }
    updateSnake() {

        const headX = this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;


        let nextX = null;
        let nextY = null;

        nextX = headX + 1;
        nextY = headY;

        this.cells.shift();

        this.cells.push({ x: nextX, y: nextY });


    }

}




const snake = new Snake();

function init() {
    snake.createSnake();
    snake.drawSnake();
}

function draw() {
    pen.clearRect(0, 0, W, H);
    snake.drawSnake();
}

function update() {
    snake.updateSnake();
}

function gameLoop() {
    update();
    draw();
}

init();



const id = setInterval(gameLoop, 100);

