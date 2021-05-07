// HTML elements
const cells = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset');
const undoBtn = document.querySelector('#undo');
const redoBtn = document.querySelector('#redo');

//game variables
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

let historyBox=[];
let historyContent=[];

// Functions
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

// Event Handlers 
// adding 'x' or 'o' moves
const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = classList.value;
    e.preventDefault()


    // do nothing if cell contains 'x' or 'o'
    if (classList[2] === 'x' || classList[2] === 'o' ) {
        return console.log('occupied');                                         
    }

    if(move % 2 === 0) {
        classList.add('o');
        console.log('Move#' + move, '  @:' + location, " =  o" );
        move += 1;

        if (checkWin() === true){
            console.log('------------PlayerO win!')
        }
    }
    else {
        classList.add('x');
        console.log('Move#' + move, '  @:' + location, " =  x" );
        move += 1;

        if (checkWin() === true){
            console.log('------------PlayerX win!')
        }
    }     
    if (checkWin() !== true && move === 9 ){
        console.log('------------Draw')
    } 

    // Save History....   :)
    historyBox.push(classList[1]);
    historyContent.push(classList[2]);
    console.log(historyBox, historyContent)
}

// Buttons (Reset)
const handleReset = (e) => {
    cells.forEach(cellDiv => {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    historyBox = [];
    move = 0;
    console. clear() 
    })
};

// Buttons (Undo)
undoButton = (index) => {
    var index = historyBox[move -1];    
    if (move <= 0) {
        handleReset();
    }
    else {
        cells[index].classList.remove('x');
        cells[index].classList.remove('o');
        console.log('Move#' + move + ' ,' + "removeBox: " + index + cells[index].classList[1] );
        move -= 1;
    }
}

// Buttons (Redo)
redoButton = () => {
    var index = [Number(move) -1 ];
    var content = historyContent[index];
    let cellDiv = cells[index].classList;
    move += 1;
    console.log(index,content);

    if (index >= historyContent.length) {
        return;
    }

    else {
        cells[index].classList.add(content);
        console.log('Move#' + move + ' ,' + "restore" + index + cells[index].classList[2] );
    }
}

// Event Listener
resetBtn.addEventListener('click', handleReset);

cells.forEach(cellDiv => {
    cellDiv.addEventListener('click', handleCellClick);
})

undoBtn.addEventListener('click', undoButton);

redoBtn.addEventListener('click', redoButton);


