/*
- Still need to check for a tie and display a tieMessage
*/

let gameActive = false; 
let activePlayer = 0; 
let boardModel = []; 
let playerColor = []; 
playerColor[1] = "red"; 
playerColor[2] = "blue"; 
function startGame() {
    if (gameActive == true) return false; 
    gameActive = true;  
    for (row=0; row<=5; row++) {
        boardModel[row] = [];
        for (col=0; col<=6; col++) {
            boardModel[row][col] = 0;
        }	
    }		
    drawBoard(); 				
    activePlayer = 1; 
    setUpTurn(); 
}

function drawBoard() {
    checkForWin(); 
    for (col = 0; col<=6; col++) {
        for (row=0; row<=5; row++) {
            document.getElementById('circle_'+row+'_'+col).innerHTML ="<span class='piece player"+boardModel[row][col]+"'> </span>";
        }	
    }
}

function checkForWin() {
        for (i=1; i<=2; i++) {
            for (col = 0; col <=3; col++) {
            for (row = 0; row <=5; row++) {
                if (boardModel[row][col] == i) {
                    if ((boardModel[row][col+1] == i) && (boardModel[row][col+2] == i) && (boardModel[row][col+3] == i)) {
                        endGame(i);
                        return true; 
                    }
                }
            }
        }
    }
    for (i=1; i<=2; i++) {
        for (col = 0; col <=6; col++) {
            for (row = 0; row <=2; row++) {
                if (boardModel[row][col] == i) {
                    if ((boardModel[row+1][col] == i) && (boardModel[row+2][col] == i) && (boardModel[row+3][col] == i)) {
                        endGame(i); 
                        return true; 
                    }
                }
            }
        }
    }
    for (i=1; i<=2; i++) {
        for (col = 0; col <=3; col++) {
            for (row = 0; row <=2; row++) {
                if (boardModel[row][col] == i) {
                    if ((boardModel[row+1][col+1] == i) && (boardModel[row+2][col+2] == i) && (boardModel[row+3][col+3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
    for (i=1; i<=2; i++) {
        for (col = 0; col <=3; col++) {
            for (row = 3; row <=5; row++) {
                if (boardModel[row][col] == i) {
                    if ((boardModel[row-1][col+1] == i) && (boardModel[row-2][col+2] == i) && (boardModel[row-3][col+3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
    
}



function endGame(winningPlayer) {
    gameActive = false; 
    document.getElementById('instructions').innerHTML = "Winner: " + winningPlayer; 
}

function setUpTurn() {
    if (gameActive) { 
        document.getElementById('instructions').innerHTML = "Current Player: Player " + activePlayer + " <span class='player"+activePlayer+"'>(" + playerColor[activePlayer] + ")</span>";
    }
}

function dropDiskIntoColumn(col) {			
        for (row=5; row>=0; row--) { 
            if (boardModel[row][col] == 0) {
                boardModel[row][col] = activePlayer;
                drawBoard(); 
                if (activePlayer == 1) {
                    activePlayer = 2;
                } else {
                    activePlayer = 1;
                }
                setUpTurn(); 
                return true;
            }
        }
}