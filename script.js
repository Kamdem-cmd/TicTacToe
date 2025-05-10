const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const annonce = document.querySelector('.annonce');

let currentPlayer = "X";
let otherPlayer = "O";

const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];

cells.forEach(cell => {
    cell.addEventListener('click', playGame, {once: true});
})

function playGame(e){
    e.target.innerHTML = currentPlayer;

    if(checkWin(currentPlayer)){
        switchAnnonce("win" + currentPlayer);
        return endGame();
    } else if(checkDraw()){
        switchAnnonce("draw");
        return endGame();
    }

    switchAnnonce(currentPlayer);
    (currentPlayer === "X") ? currentPlayer = "O" : currentPlayer = "X";
}

function switchAnnonce(status){
    let texte;
    switch (status){
        case 'X':
            texte = "Au tour du joueur2 (O)";
            break;
        case 'O':
            texte = "Au tour du joueur1 (X)";
            break;
        case 'winX':
            texte = "Victoire du joueur1 (X)";
            break;
        case 'winO':
            texte = "Victoire du joueur2 (O)";
            break;
        case 'draw':
            texte = "Pas de vainqueur";
            break;
}
    annonce.innerHTML = texte;
} 

function checkWin(currentPlayer){
    return winCombos.some(combo => {
        return combo.every(index =>{
            return cells[index].innerHTML == currentPlayer;
        });
    });
}
function checkDraw(){
    return [...cells].every(cell => {
        return cell.innerHTML == currentPlayer || cell.innerHTML == otherPlayer;
    });
}

function endGame(){document.getElementById('gameEnd').style.display = "block"}

function reloadGame(){ window.location.reload() }