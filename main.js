let color = "black";

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    let btn = document.querySelector("#popup");
    btn.addEventListener("click", function(){
        let size = getSize();
        createBoard(size)
    })
    console.log("Hi Jill!")

});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDives = size * size;

    for (let i = 0; i < numDives; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("Give me a size for the board!")
    let message  = document.querySelector("#message");
    if (input === ""){
        message.innerHTML = "Please provide a number";
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Please stay in the bounds of 0 through 100";
    } else {
        message.innerHTML = "Woohoo, now you can play!";
        return input;
    }
}

function colorDiv(){
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = "black";
    }
    
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}