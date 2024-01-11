document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    console.log("Howdy")

});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDives = size * size;

    for (let i = 0; i < numDives; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow"
        board.insertAdjacentElement("beforeend", div);
    }
}