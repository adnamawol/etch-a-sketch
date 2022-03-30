const container = document.querySelector('#container')
const para = document.createElement('p');
const colorModeStatus = document.querySelector('#colormode');

for (i=0;i<16;i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

para.textContent="White";
colorModeStatus.appendChild(para);

//original reset
/*const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    gridSquares.forEach( (gridSquare) => {
        gridSquare.classList.remove('color');
    });
}) */

//reset for adding bg-color with JavaScript instead of CSS

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    let gridSquares = document.querySelectorAll('div.square');
    let length = gridSquares.length;

    for (i=0;i<length;i++) {
        gridSquares[i].style.backgroundColor = "transparent";
    }
})



// users set number of grid squares

const numOfSquaresBtn = document.querySelector('#howmany');
numOfSquaresBtn.addEventListener('click', () => {
    let userNum = prompt("How many squares would you like to have on each side?",4)

    userCreateSquares(userNum)
});


function userCreateSquares (num) {
    
    for (i=0;i<(num*num);i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    }
}

//Toggle between colour and non-colour modes

const toggleColorBtn = document.querySelector('#toggle-color');
toggleColorBtn.addEventListener('click', () => {
    gridSquares.forEach( (gridSquare) => {
        gridSquare.addEventListener('mouseover', () => changeGridCol())
    } );

    para.textContent="Psychedelic";
    colorModeStatus.appendChild(para);
})

const toggleWhiteBtn = document.querySelector('#toggle-white');
toggleWhiteBtn.addEventListener('click', () => {
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', () => whitenGridCol())
    } );

    para.textContent="White";
    colorModeStatus.appendChild(para);
})



//white tile mode

const gridSquares = document.querySelectorAll('div.square');

function whitenGridCol() {
    let gridSquares = document.querySelectorAll('div.square');
    
    let length = gridSquares.length;

    for (i=0;i<length;i++) {
        gridSquares[i].style.backgroundColor = "whitesmoke";
        gridSquares[i].style.animation = "fade-in 0.8s";
    }
}



/*gridSquares.forEach( (gridSquare) => {
    gridSquare.addEventListener('mouseover', () => gridSquare.classList.add('color'))
} )*/

//multi-colour tile mode

/*random colour generator*/

function rdmNumGen (num) {
    return Math.floor(Math.random()*(num+1))
}

function rdmColGen () {
  let r = rdmNumGen(255) ;
  let g = rdmNumGen(255) ;
  let b = rdmNumGen(255) ;
  
  return "rgb"+"("+r+","+g+","+b+")";
}


const gridSquare = document.querySelector('div.square');
let gridSquareStyle = document.querySelector('div.square').style;

function changeGridCol () {
    let gridSquares = document.querySelectorAll('div.square');
    let length = gridSquares.length;

    for (i=0;i<length;i++) {
        gridSquares[i].style.backgroundColor = rdmColGen();
        gridSquares[i].style.animation = "fade-in 0.8s";
    }
}

gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', () => whitenGridCol('div.square'))
} )


/* function changeGridCol () {
    gridSquareStyle.backgroundColor = rdmColGen();
    gridSquareStyle.animation = "fade-in 0.8s";
} */

/*const gridSquaresStyle = document.querySelectorAll('div.square').style;

gridSquaresStyle.forEach( (gridSquare) => {
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.backgroundColor = rdmColGen();
    })
} )*/














/*button to try random colour generation*/
const rdmColorBtn = document.querySelector('.rdm');
const rdmColorBtnStyle = document.querySelector('.rdm').style;


function changeBtnColor () {
    rdmColorBtnStyle.backgroundColor = rdmColGen();
}

rdmColorBtn.addEventListener('click', () => changeBtnColor())
//