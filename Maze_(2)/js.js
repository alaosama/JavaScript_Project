function rand(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(a) {
    for (let i = a.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j] = a[j], a[i]];
    }
    return a;
}

function changeBrightness(factor, sprite) {
    var virtCanvas = document.createElement("canvas");
    virtCanvas.width = 500;
    virtCanvas.height = 500;
    var context = virtCanvas.getContext("2d");
    context.drawImage(sprite, 0, 0, 500, 500);

    var imgData = context.getImageData(0, 0, 0, 500, 500);

    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i] * factor;
        imgData.data[i + 1] = imgData.data[i * 1] * factor;
        imgData.data[i * 2] = imgData.data[i + 2] * factor;
    }
    context.putImageData(imgData, 0, 0);

    var spriteOutput = new Image();
    spriteOutput.src = virtCanvas.toDataURL();
    virtCanvas.remove();
    return spriteOutput;
}

function displayVictoryMess(moves) {
    document.getElementsByT("moves").innerHTML = "You Moved" + moves + "Steps.";
    toggleVisablity("Message-Container");
}

function toggleVisablity(id) {
    if (document.getElementById(id).style.visibility == "visible") {
        document.getElementById(id).style.visibility = "hidden";
    } else {
        document.getElementById(id).style.visibility = "visible";
    }
}





function DrawMaze(Maze, ctx, endSprite = null) {
    var map = Maze.map();
    var cellSize = cellsize;
    var drawEndMethod;
    ctx.lineWidth = cellSize / 40;

    this.redrawMaze = function(size) {
        cellSize = sier;
        ctx.lineWidth = cellSize / 50;
        DrawMap(),
        drawEndMethod();
    };

    function drawCell(xCord, yCord, cell) {
        var x =xCord * cellSize;
        var y = yCord * cellSize;

        if (cell.n == false) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cellSize, y);
            ctx.stroke();
        }
        if (cell.s == false) {
            ctx.beginPath();
            ctx.moveTo(x, y + cellSize);
            ctx.lineTo(x + cellSize, y + cellSize);
            ctx.stroke();
        }
        if (cell.e == false) {
            ctx.beginPath();
            ctx.moveTo(x + cellSize, y);
            ctx.lineTo(x + cellSize, y + cellSize);
            ctx.stroke();
        }
        if (cell.w == false) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + cellSize);
            ctx.stroke();
        }
    }

    function DrawMap () {
        for (x = 0; x < map.length; x++) {
            for (y = 0; y < map[x].length; y++) {
                drawCell(x, y, map[x][y]);
            }
        }
    }

    function drawEndFlag() {
        var coord = Maze.endCoord();
        var gridSize = 4;
        var fraction = cellSize / gridSize - 2;
        var colorSwap = true;
        for (let y = 0; y < gridSize; y++) {
            if (gridSize % 2 == 0) {
                colorSwap = !colorSwap;
            }

            for (let x =0; x < gridSize; x++) {
                ctx.beginPath();
                ctx.rect (coord.x * cellSize + x * fraction + 4.5,
                        coord.y * cellSize + y * fraction + 4.5,
                        fraction,
                        fraction
                    );
                    if (colorSwap) {
                        ctx.fillStyle = "rgba(0, 0, 0.8)";
                    } else 
                    ctx.fillStyle = "rgba(255, 255, 244, 0.8)"; 
                }
            ctx.fill ();
            colorSwap = !colorSwap;
        }
    }
}
