// HTML elements
const cells = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset');
const undoBtn = document.querySelector('#undo');
const redoBtn = document.querySelector('#redo');
let playerTurnX = document.querySelector('.playerX')
let playerTurnO = document.querySelector('.playerO')



//game variables @ game start
playerTurnX.style.color = 'springgreen';                                    // player X 1st
move = 0;
let Winning_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let historyBox = [];
let historyContent = [];
let redoStorage = [];
let redoMoveStorage = [];
let nextMoveStorage = [];
let previousPlayerStorage = [];

// Functions

// Check if there's a Winner
function checkWin() {
    return Winning_combinations.some(combination => {
        return combination.every( index => {
            if (move % 2 !== 0) {
                return cells[index].classList.contains('x');
            }
            else {
                return cells[index].classList.contains('o');
            }
        })
    })
}

// Highligth who's players Turn
function playerTurn () {
    if (move % 2 !== 0) {
        playerTurnO.style.color = 'springgreen';
        playerTurnX.style.color = 'white';
        playerTurnO.style.boxShadow = 'springgreen 3px 3px';
        playerTurnX.style.boxShadow = 'none';
        playerTurnO.style.textDecoration  = 'underline';
        playerTurnX.style.textDecoration  = 'none';
    }
    else {
        playerTurnX.style.color = 'springgreen';
        playerTurnO.style.color = 'white';
        playerTurnX.style.boxShadow = 'springgreen 3px 3px';
        playerTurnO.style.boxShadow = 'none';
        playerTurnX.style.textDecoration  = 'underline';
        playerTurnO.style.textDecoration  = 'none';

    }
}

// target cell for the player moves
const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = classList.value;
    move += 1;
    document.getElementById('redo').style.display = 'none';
    document.getElementById('undo').style.display = 'flex';    
    if (classList[2] === 'x' || classList[2] === 'o' ) {
        return;                                                                               // do nothing if cell contains 'x' or 'o'                            
    }

    if(move % 2 === 0) {
        playerTurn ();
        classList.add('o');
        console.log('Move#' + move, '  @' + location, " =  o" );
        if (checkWin() === true){
            console.log('------------PlayerO win!')                                                                 //delete later ---------------------
            document.getElementById("winner").style.display = "flex";
            document.getElementById("playerWin").innerText = 'PlayerO win';
        }
    }
    else {
        playerTurn ();
        classList.add('x');
        console.log('Move#' + move, '  @ ' + location, " =  x" );
        if (checkWin() === true){
            console.log('------------PlayerX win!')                                                                 //delete later ---------------------
            document.getElementById("winner").style.display = "flex";
            document.getElementById("playerWin").innerText = 'PlayerX win';        
        }
    }     
    if (checkWin() !== true && move === 9 ){
      console.log('------------Draw');
      document.getElementById("winner").style.display = "flex";
      document.getElementById("playerWin").innerText = 'Draw';                                                      //delete later ---------------------
    } 

    // Save History....   :)
    historyBox.push(classList[1]);
    historyContent.push(classList[2]);
    // console.log('----> Stored History',historyBox, historyContent) 
}

// Buttons (Reset)
const handleReset = (e) => {
    cells.forEach(cellDiv => {                                                                             //clear data's
        cellDiv.classList.remove('x');                                      
        cellDiv.classList.remove('o');                            
        historyBox = [];
        historyContent = [];
        move = 0;
        console. clear() 
        playerTurnX.style.color = 'springgreen';
        document.getElementById("winner").style.display = "none";
        document.getElementById('redo').style.display = 'none';
        document.getElementById('undo').style.display = 'none';
    })
};

// Buttons (Undo)
undoButton = (index) => {
    let targetCell = historyBox[historyBox.length - 1]
    let lastmove = historyContent[historyContent.length - 1];
    document.getElementById('redo').style.display = 'flex';
    document.getElementById("winner").style.display = "none";
    if (move === 0) {
        return move = 0;
    }
    else {
        move -= 1;
        cells[targetCell - 1].classList.remove(cells[targetCell -1 ].classList[2]);                         // update web content (remove content to targetcell) 
        historyBox.pop();                                                                                   // remove last move from historyBox
        historyContent.pop();                                                                               // remove last move content (historyContent)                            
        console.log ('Move#',move, '-----> Remove:',lastmove ,'@ box:', targetCell, );
        if (move === 0) {
            document.getElementById('undo').style.display = 'none';
            return;
        }
        // Stored undo History
        redoStorage.push(targetCell);                                                                       // stored last move from historyBox  
        redoMoveStorage.push(lastmove);                                                                     // stored for 'next' state (Redo's)
    }
}

// Buttons (Redo)
    redoButton = () => {
        let lastmove = redoMoveStorage[redoMoveStorage.length - 1];
        let targetCell = redoStorage[redoStorage.length - 1];
        document.getElementById('undo').style.display = 'flex';
        console.log ('Move#',move, '-----> Add:',lastmove ,'@ box:', targetCell, );


        if (redoMoveStorage <= 0) {
            return;

            // targetCell.classList.add(lastPlayer)                                    //display last player in cell
            // previousMoveStorage.push(lastMove);                                     //add last move to previousMoveStorage
            // nextMoveStorage.pop();                                                  //remove last move from nextMoveStorage
            // previousPlayerStorage.push(lastPlayer);                                 //add last player to previousPlayerStorage
            // nextPlayerStorage.pop();                                                //remove last player from nextPlayerStorage
            // move += 1;

        }           
        else {
            move += 1;
            cells[targetCell -1].classList.add(lastmove);                         // update web content (remove content to targetcell) 
            historyBox.push(targetCell);                                                                                   // remove last move from historyBox
            historyContent.push(lastmove);                                                                               // remove last move content (historyContent)   
            redoStorage.pop();                                                                       // stored last move from historyBox  
            redoMoveStorage.pop();                                                                     // stored for 'next' state (Redo's)
                         
            // document.getElementById('redo').style.display = 'flex';
            // document.getElementById('undo').style.display = 'flex';
    }
}

// redoButton = () => {
//     if (nextMoveStorage.length != 0) {
//         let lastMove = nextMoveStorage[nextMoveStorage.length - 1];
//         let targetCell = cells[lastMove];
//         let lastPlayer = nextPlayerStorage[nextPlayerStorage.length - 1]
//         targetCell.classList.add(lastPlayer)                                    //display last player in cell
//         previousMoveStorage.push(lastMove);                                     //add last move to previousMoveStorage
//         nextMoveStorage.pop();                                                  //remove last move from nextMoveStorage
//         previousPlayerStorage.push(lastPlayer);                                 //add last player to previousPlayerStorage
//         nextPlayerStorage.pop();                                                //remove last player from nextPlayerStorage
//         move += 1;

//     }   
//     else {
//         document.getElementById('redo').style.display = 'flex';
//         document.getElementById('undo').style.display = 'flex';


//     }
// }

// redoButton = () => {
//     var index = [Number(move) -1 ];
//     var content = historyContent[index];
//     let cellDiv = cells[index].classList;
//     move += 1;
//     console.log(index,content);

//     if (index >= historyContent.length) {
//         return;
//     }

//     else {
//         cells[index].classList.add(content);
//         console.log('Move#' + move + ' ,' + "restore" + index + cells[index].classList[2] );
//     }
// }

// Event Listener
resetBtn.addEventListener('click', handleReset);

cells.forEach(cellDiv => {
    cellDiv.addEventListener('click', handleCellClick);
})

undoBtn.addEventListener('click', undoButton);

redoBtn.addEventListener('click', redoButton);


