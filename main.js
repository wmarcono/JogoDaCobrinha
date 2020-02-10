let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //variavel de tamanho do quadradro de posição
let snake = []; //array de coordenadas da cobrinha
snake[0] = {
    x: 8 * box, y: 8 * box  // coordenadas iniciando no meio da tela
}
let direction = "right";
let jogo = setInterval(iniciarJogo, 1000); // seta o tempo de atualização(ação da cobra)

function criarBG(){  //metodo que cria a tela
    context.fillStyle = "lightgreen"; 
    context.fillRect(0, 0, 16 * box, 16 * box); //tamanho da tela nas coordenadas x e y
}

function criarCobrinha(){ //metodo de criação da cobrinha
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snake += box;
    if(direction == "left") snake += box;
    if(direction == "up") snake += box;
    if(direction == "down") snake == box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}