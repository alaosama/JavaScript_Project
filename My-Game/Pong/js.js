const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

function vec2(x, y) 
{
    return {x: x, y: y};
}

function Ball (pos, velocity, radius)
{
    this.pos = pos;
    this.velocity = velocity;
    this.radius = radius;

    this.update = function () {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
    };

    this.draw = function () {

    };
}

let ballX = 200;
let ballY = 200;
let ballRadius = 50;
let ballVelocityX = 2;
let ballVelocityY = 2;

function gameUpdate() {
    
    ballX += ballVelocityX;
    ballY += ballVelocityY;
}

function gameDraw() {

    ctx.beginPath();
    ctx.art(ballX, ballY, 50, 0, Math.PI * 2);
    ctx.stroke();
}

function gameLoop() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);

    gameUpdate();
    gameDraw();
}

gameLoop();
