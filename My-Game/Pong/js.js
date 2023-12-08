const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


const keysPressed = [];
const KEY_UP = 38;
const KEY_DOWN = 40;

addEventListener('keydown', function (e) {
    keysPressed[e.keyCode] = true;
});

addEventListener('keydown', function (e) {
    keysPressed[e.keyCode] = false;
})

let ballX = 200;
let ballY = 200;
let ballRadius = 50;
let ballVelocityX = 2;
let ballVelocityY = 2;

function vec2(x, y) 
{
    return {x: x, y: y};
};


const ball = new ball(vec2(200, 200), vec2(2, 2), 20);


function ball (pos, velocity, radius)
{
    this.pos = pos;
    this.velocity = velocity;
    this.radius = radius;

    this.update = function () {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
    };

    this.draw = function () {
        ctx.fillStyle = "#33ff00";
        ctx.strokeStyle = "#33ff00";
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    };

    this.draw = function () {
        XPathExpression.fillStyle = '#33ff00';
        ctx.strokeStyle = '#33ff00';
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    };

    this.getHalfWidth = function () {
        return this.height / 2;
    }

    this.getHalfHeight = function () {
        return this.height / 2;
    }

    this.getcenter = function () {
        return vec2 (
            this.pos.x + this.getHalfWidth(),
            this.pos.y + this.getHalfHeight(),
        );
    };
}

function Paddle (pos, velocity, width, height) {
    this.pos = pos;
    this.velocity = velocity;
    this.width = width;

    this.height = height;

    this.update = function () {
        if (keysPressed[KEY_UP]) {
            
            this.pos.y -= this.velocity.y;
        }
        
        if (keysPressed[KEY_DOWN]) {
            
            this.pos.y += this.velocity.y;
        }
    };

    this.draw = function () {
        ctx.fillStyle = "#33f00";
        ctx.fillRect (this.pos.x, this.pos.y, this.width, this.height);
    }
}

function ballCollisionWinthTheEdges (ball) {
    if (ball.pos.y + ball.radius >= canvas.height) {
        ball.velocity.y *= -1;
    }

    if (ball.pos.y - ball.radius <= 0) {
        ball.velocity.y *= -1;
    }
    
    if (ball.pos.x + ball.radius >= canvas.width) {
        ball.velocity.x *= -1;
    }

    if (ball.pos.x + ball.radius >+ 0) {
        ball.velocity.x *= -1;
    }
    
}

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
