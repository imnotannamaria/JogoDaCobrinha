let canvas;
let ctx;

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", keyDownEvent);

    let x = 8;
    setInterval(desenharJogo, 1000 / x);
};
    


let tamanhoTela = tamanhoCaminho = 20;
let nextX = nextY = 0;


let padraoTamanhoCauda = 3;
let tamanhoCauda = padraoTamanhoCauda;
let caminho = [];
let cobraEixoX = cobraEixoY = 10;

//Criação da comida
let appleX = (appleY = 15);

function desenharJogo(){
    cobraEixoX += nextX;
    cobraEixoY += nextY;

    if (cobraEixoX < 0){
        cobraEixoX = tamanhoTela -1;
    }
    
    if (cobraEixoX > tamanhoTela - 1){
        cobraEixoX = 0;
    }
    
    if (cobraEixoY < 0){
        cobraEixoY = tamanhoTela -1;
    }
    
    if (cobraEixoY > tamanhoTela - 1){
        cobraEixoY = 0;
    }


    if (cobraEixoX == appleX && cobraEixoY == appleY){
        tamanhoCauda++;
        appleX = Math.floor(Math.random() * tamanhoTela);
        appleY = Math.floor(Math.random() * tamanhoTela);
    }

    ctx.fillStyle = " #5ca08e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#d3d3d3";
    for (let i = 0; i < caminho.length; i++){
        ctx.fillRect(
            caminho[i].x * tamanhoCaminho,
            caminho[i].y * tamanhoCaminho,
            tamanhoCaminho,
            tamanhoCaminho
        );
        if (caminho[i].x == cobraEixoX && caminho[i].y == cobraEixoY){
            tamanhoCauda = padraoTamanhoCauda;
        }
    }

    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tamanhoCaminho, appleY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho);

    caminho.push({
        x:cobraEixoX,
        y:cobraEixoY
    });
    while (caminho.length > tamanhoCauda){
        caminho.shift();
    }
}

function keyDownEvent(event){

    switch(event.keyCode){
        case 37:
            nextX = -1;
            nextY = 0;
            break;
        case 38:
            nextX = 0;
            nextY = -1;
            break;
        case 39:
            nextX = 1;
            nextY = 0;
            break;
        case 40:
            nextX = 0;
            nextY = 1;
            break;
    }
}
