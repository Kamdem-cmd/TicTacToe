const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const annonce = document.querySelector(".annonce");

let currentPlayer = "X";
const winCombo = [[0, 1, 2],[3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7],[2, 5, 8], [0, 4, 8],[2, 4, 6]];

function checkWin(){
    return winCombo.some(combo => {
        return combo.every(index => cells[index].textContent === currentPlayer);
    });
}

function switchPlayer(){
    (currentPlayer === "X") ? currentPlayer = "O" : currentPlayer = "X";
}

function checkDraw(){
    return [...cells].every(cells => cells.textContent !== "");
}

function handleCheck(event){
    const cell = event.target;

    if(!cell.classList.contains("cell") || cell.textContent !== ""){
        return;
    }
    cell.textContent = currentPlayer;
    if(checkWin()){
        annonce.textContent = currentPlayer + " à gagné !!";
    }
    else if(checkDraw()){
        annonce.textContent = + "égalité !!";
    }
    board.removeEventListener("click", handleCheck);
    switchPlayer();
}

board.addEventListener("click", handleCheck);


