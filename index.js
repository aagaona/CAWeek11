const Player_1 = `X`
const Player_2 = `O`
let turn = Player_1;
let squares = document.querySelectorAll('.game-board');




// add click listner to return the id when square is selected and produce the correct outcome    
squares.forEach(square => {square.addEventListener('click', () =>{
    let id = square.getAttribute('id');
    let usableid = `#${id}`;
    
    resolveClick(usableid);   
    changeTurn();
    determineWinner();
});
});


//sets up the start of the game and moves the turn box to the right person
function startGame(){
    $('#resetbtn').toggle();
    turn = Player_1;
    changeTurn(); 
};
 


//moves the turn box
function changeTurn(){
    let player1 = $('#P1Box');
    let player2 = $('#P2Box');
    
    if (turn === Player_1){
        player1.css('border','5px solid aqua');
        player1.css('background-color', 'aqua');
        player2.css('border','0px solid goldenrod');
        player2.css('background-color', 'transparent');
    } else if(turn === Player_2){
        player1.css('border','0px solid aqua');
        player1.css('background-color', 'transparent');
        player2.css('border','5px solid goldenrod');
        player2.css('background-color', 'goldenrod');
    };
    
}



//handles the input of an X
function boardClickX (id){
    let box = $(id);
    box.text('X');
    box.css('font-size','45px');
    box.css('font-weight','bold');
    box.css('color','aqua');
    box.css('pointer-events','none'); 
};



//handles the input of an O
function boardClickO (id){
    let box = $(id);
    box.text('O');
    box.css('font-size','45px');
    box.css('font-weight','bold');
    box.css('color','goldenrod');
    box.css('pointer-events','none');
};

function resolveClick(usableid){
    if (turn === Player_1){
        boardClickX(usableid);
        turn = Player_2; 
    } else if(turn === Player_2) {
        boardClickO(usableid);
        turn = Player_1;
    };
};



//determine winner by cycling through each possible outcome, I feel like this could be refactored
function determineWinner(){
    if (($('#L1-1').text() === `X` && $('#M1-2').text() === `X` && $('#R1-3').text() === `X`)){
        victoryBanner(`Player 1`);
    } else if (($('#L1-1').text() === `X` && $('#M2-2').text() === `X` && $('#R3-3').text() === `X`)){
        victoryBanner(`Player 1`);
    } else if (($('#L1-1').text() === `X` && $('#L2-1').text() === `X` && $('#L3-1').text() === `X`)){
        victoryBanner(`Player 1`);
    } else if (($('#L2-1').text() === `X` && $('#M2-2').text() === `X` && $('#R2-3').text() === `X`)){
        victoryBanner(`Player 1`);
    } else if (($('#L3-1').text() === `X` && $('#M2-2').text() === `X` && $('#R1-3').text() === `X`)){
        victoryBanner(`Player 1`);
    } else if (($('#L3-1').text() === `X` && $('#M3-2').text() === `X` && $('#R3-3').text() === `X`)){
        victoryBanner(`Player 1`);
    } else if (($('#M1-2').text() === `X` && $('#M2-2').text() === `X` && $('#M3-2').text() === `X`)){
        victoryBanner(`Player 1`);
    } else if (($('#R1-3').text() === `X` && $('#R2-3').text() === `X` && $('#R3-3').text() === `X`)){
        victoryBanner(`Player 1`);
    } else if (($('#L1-1').text() === `O` && $('#M1-2').text() === `O` && $('#R1-3').text() === `O`)){
        victoryBanner(`Player 2`);
    } else if (($('#L1-1').text() === `O` && $('#M2-2').text() === `O` && $('#R3-3').text() === `O`)){
        victoryBanner(`Player 2`);
    } else if (($('#L1-1').text() === `O` && $('#L2-1').text() === `O` && $('#L3-1').text() === `O`)){
        victoryBanner(`Player 2`);
    } else if (($('#L2-1').text() === `O` && $('#M2-2').text() === `O` && $('#R2-3').text() === `O`)){
        victoryBanner(`Player 2`);
    } else if (($('#L3-1').text() === `O` && $('#M2-2').text() === `O` && $('#R1-3').text() === `O`)){
        victoryBanner(`Player 2`);
    } else if (($('#L3-1').text() === `O` && $('#M3-2').text() === `O` && $('#R3-3').text() === `O`)){
        victoryBanner(`Player 2`);
    } else if (($('#M1-2').text() === `O` && $('#M2-2').text() === `O` && $('#M3-2').text() === `O`)){
        victoryBanner(`Player 2`);
    } else if (($('#R1-3').text() === `O` && $('#R2-3').text() === `O` && $('#R3-3').text() === `O`)){
        victoryBanner(`Player 2`);
    } else if (fullBoardCheck() == true){
        tieBanner();
    } else {};
};



//outcome Alerts
function victoryBanner(player) {
    $('#resetbtn').text('Play Again');
    alert(`${player} Wins!`);
    $('.game-board').css('pointer-events','none');
    $('#resetbtn').toggle();
};

function tieBanner () {
    $('#resetbtn').text('Play Again');
    alert(`It's a tie...`);
    $('.game-board').css('pointer-events','none');
    $('#resetbtn').toggle();
};



//used to check if everysquare has been filled
function fullBoardCheck(){
   let allElementsContainText = true

    squares.forEach(square => {
        if(square.textContent.trim() === ''){
            allElementsContainText = false;
        }
    });

    if(allElementsContainText){
        return true;
    } else {
        return false;
    }
}



//swaps text of the reset button
function resetGame(){
    if ($('#resetbtn').text() === `Play Again`){
        $('#resetbtn').text('Reset Game')
    } else { $('#resetbtn').text('Reset Game')
    };

    $('.game-board').text('');
    $('.game-board').css('pointer-events','all');
    $('.game-board').off('click');
    startGame();
};



//defines what the reset button does when clicked
$('#resetbtn').on('click', () => {
    resetGame();    
});


//"Loads" the Game----------------------------------------------------
startGame();



//---------------------------------------For Persoonal Reference-------------------------------------//

// winning lines

// ($('#L1-1').text() === `X` && $('#M1-2').text() === `X` && $('#R1-3').text() === `X`) Top row
// ($('#L1-1').text() === `X` && $('#M2-2').text() === `X` && $('#R3-3').text() === `X`) Diag L to R
// ($('#L1-1').text() === `X` && $('#L2-1').text() === `X` && $('#L3-1').text() === `X`) L Column
// ($('#L2-1').text() === `X` && $('#M2-2').text() === `X` && $('#R2-3').text() === `X`) Middle Row
// ($('#L1-3').text() === `X` && $('#M2-2').text() === `X` && $('#R3-1').text() === `X`) Diag R to L
// ($('#L3-1').text() === `X` && $('#M3-2').text() === `X` && $('#R3-3').text() === `X`) Bottom Row
// ($('#M1-2').text() === `X` && $('#M2-2').text() === `X` && $('#M3-2').text() === `X`) Middle Column
// ($('#R1-3').text() === `X` && $('#R2-3').text() === `X` && $('#R3-3').text() === `X`) R Column

// ($('#L1-1').text() === `O` && $('#M1-2').text() === `O` && $('#R1-3').text() === `O`) Top row
// ($('#L1-1').text() === `O` && $('#M2-2').text() === `O` && $('#R3-3').text() === `O`) Diag L to R
// ($('#L1-1').text() === `O` && $('#L2-1').text() === `O` && $('#L3-1').text() === `O`) L Column
// ($('#L2-1').text() === `O` && $('#M2-2').text() === `O` && $('#R2-3').text() === `O`) Middle Row
// ($('#L1-3').text() === `O` && $('#M2-2').text() === `O` && $('#R3-1').text() === `O`) Diag R to L
// ($('#L3-1').text() === `O` && $('#M3-2').text() === `O` && $('#R3-3').text() === `O`) Bottom Row
// ($('#M1-2').text() === `O` && $('#M2-2').text() === `O` && $('#M3-2').text() === `O`) Middle Column
// ($('#R1-3').text() === `O` && $('#R2-3').text() === `O` && $('#R3-3').text() === `O`) R Column

