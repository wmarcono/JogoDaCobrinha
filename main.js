let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //variavel de tamanho do quadradro de posição
let snake = []; //array de coordenadas da cobrinha
snake[0] = {
    x: 8 * box, y: 8 * box  // coordenadas iniciando no meio da tela
}
let direction = "right";
let food = { // variavel da comidinha
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

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

function Comidinha(){ // metodo que cria a comidinha
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event){  // função que recebe o evento do botão
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
        //evita que a cobrinha saia da tela
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('GAME OVER :( ');
        }
    }
    
    criarBG();
    criarCobrinha();
    Comidinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); // seta o tempo de atualização(ação da cobra)