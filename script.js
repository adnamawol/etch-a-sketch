const container = document.querySelector('#container')
const para = document.createElement('p');
const colorModeStatus = document.querySelector('#colormode');
const gridSquare = document.querySelector('div.square');

// users set number of grid squares

createSquares(4);
para.textContent="White";
colorModeStatus.appendChild(para);

function createSquares (num) {
    for (i=0;i<(num*num);i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${580/num}px`;
    square.style.height = `${580/num}px`;
    container.appendChild(square);
    }
}

const numOfSquaresBtn = document.querySelector('#howmany');
numOfSquaresBtn.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('div.square');
    for (i=0;i<gridSquares.length;i++) {
        container.removeChild(gridSquares[i]);
        }
    let userNum = prompt("How many squares would you like to have on each side?",4)
    if (userNum > 100 || userNum < 1) {
        alert("Please key in a number between 1 and 100.")
    } else {
        createSquares(userNum);
    };
});

//white tile mode

const gridSquares = document.querySelectorAll('div.square');

function whitenGridCol(evt) {
    Object.assign(evt.target.style, {
        backgroundColor: 'whitesmoke',
        transition: "all 0.5s",
    })
}

//multi-colour tile mode

/*random colour generator*/
function rdmColGen () {
  let r = Math.floor(Math.random()*(255+1));
  let g = Math.floor(Math.random()*(255+1));
  let b = Math.floor(Math.random()*(255+1));
  
  return 'rgb'+'('+r+','+g+','+b+')';
}

function changeGridCol (evt) {
    Object.assign(evt.target.style, {
        backgroundColor: rdmColGen(),
        transition: "all 0.5s",
    })
}

gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', (evt) => whitenGridCol(evt))
} )

//Toggle between colour and non-colour modes, and remove individual grid Squares of colour

const toggleColorBtn = document.querySelector('#toggle-color');
toggleColorBtn.addEventListener('click', () => {
    gridSquares.forEach( (gridSquare) => {
        gridSquare.addEventListener('mouseover', (evt) => changeGridCol(evt))
    } );
    para.textContent="Psychedelic";
    colorModeStatus.appendChild(para);
})

const toggleWhiteBtn = document.querySelector('#toggle-white');
toggleWhiteBtn.addEventListener('click', () => {
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', (evt) => whitenGridCol(evt))
    } );
    para.textContent="White";
    colorModeStatus.appendChild(para);
})

function eraseGridCol (evt) {
    Object.assign(evt.target.style, {
        backgroundColor: 'transparent',
        transition: "all 0.5s",
    })
}

const eraserBtn = document.querySelector('#eraser')
eraserBtn.addEventListener('click', () => {
   gridSquares.forEach ( (gridSquare) => {
       gridSquare.addEventListener( 'mouseover', (evt) => eraseGridCol(evt));
    }) 
    para.textContent = 'Eraser';
    colorModeStatus.appendChild(para);
} )

//reset for adding bg-color

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    let gridSquares = document.querySelectorAll('div.square');
    let length = gridSquares.length;
    for (i=0;i<length;i++) {
        gridSquares[i].style.backgroundColor = "transparent";
    }
})

