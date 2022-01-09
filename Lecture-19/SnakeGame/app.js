const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';
pen.font = '40px sans-serif';
// Height and Width of the canvas

const W = 1200; //width of the canvas
const H = 735; //height of the canvas
const cs = 67; //size of the cell i.e height=67 and width=67
let food = null;
let score = 0;


class Snake{

    constructor() {
        this.init_len = 5; //intial length
        this.direction = 'right'; //default direction of the snake
        this.cells = []; //stores the coordinates of each cell in a snake
    }

    createSnake() {
        for (let i = 0; i < this.init_len; i++) {
            this.cells.push({ x: i, y: 0 });
        }
    }
    drawSnake() {
        for (let i = 0; i < this.cells.length; i++) {

            const cell = this.cells[i];

            if (i === this.cells.length - 1) {
                pen.fillStyle = 'red';
            } else {
                pen.fillStyle = 'yellow';
            }
            pen.fillRect(cell.x*cs, cell.y*cs, cs-2, cs-2);
        }
    }
    changeSnakeDirection(direction) {
        this.direction = direction;
    }

    updateSnake() {


        // cells = [{tailx,taily}.........{headx,heady}]

        // finding the x coordinate of head of snake
        const headX = this.cells[this.cells.length - 1].x;
        // finding the y coodinate of the head if the snake
        const headY = this.cells[this.cells.length - 1].y;

        // collision of food with the snake head
        if (headX === food.x && headY === food.y) {
            // we are genrating a new food
            food = getRandomFood();
            score++;
        } else {
            this.cells.shift();
        }

        let nextX = null;
        let nextY = null;

         //removing the first cell from the array

     
        
        if (this.direction === 'left') {
            nextX = headX - 1;
            nextY = headY;
        }
        else if (this.direction === 'right') {
            nextX = headX + 1;
            nextY = headY;
            console.log(nextX*cs)

            // checking whether the nextX will cross the width if yess than stop the game
            // By passing the id into clearInterval function
            if (nextX * cs >= W) {
                pen.fillText('Game Over',100,100);
                clearInterval(id);
            }

        }
        else if (this.direction === 'up') {
            nextX = headX;
            nextY = headY - 1;
        }
        else {
            nextX = headX;
            nextY = headY + 1;
        }


        // adding the new cell in the snake after head of snake
        this.cells.push({ x: nextX, y: nextY });


    }

}




const snake = new Snake();

function init() {
    snake.createSnake();
    snake.drawSnake();
    food = getRandomFood();
    pen.fillStyle='lightgreen';
    pen.fillRect(food.x * cs, food.y * cs, cs, cs);
    pen.fillText(`Score : ${score}`, 50, 50);
    function keyPressed(e) {
        
        if (e.key === 'ArrowRight') {
            snake.changeSnakeDirection('right');
        }
        else if (e.key === 'ArrowLeft') {
            snake.changeSnakeDirection('left');
        }
        else if (e.key === 'ArrowUp') {
            snake.changeSnakeDirection('up');
        } else {
            snake.changeSnakeDirection('down');
        }

    }


    document.addEventListener('keydown', keyPressed);

}

function draw() {
    pen.clearRect(0, 0, W, H);
    pen.fillStyle='lightgreen';
    pen.fillRect(food.x * cs, food.y * cs, cs, cs);
    pen.fillText(`Score : ${score}`, 50, 50);
    snake.drawSnake();
}

function update() {
    snake.updateSnake();
}

function gameLoop() {
    draw();
    update();
}


function getRandomFood() {
    
    const foodX = Math.floor(Math.random() * (W - cs)/cs);
    const foodY = Math.floor(Math.random() * (H - cs)/cs);
    

    return { x: foodX, y: foodY };
}

init();



const id = setInterval(gameLoop, 100);

