const container = document.querySelector('#container')
const para = document.createElement('p');
const colorModeStatus = document.querySelector('#colormode');
const gridSquare = document.querySelector('div.square');


//default setting on window load
window.addEventListener('load', () => {
    para.textContent="White";
    colorModeStatus.appendChild(para);
});
let penType = 'white';
createSquares(4);
window.addEventListener('load', () => {
    numSquare.textContent= slider.value;
    sliderNumDisplay.appendChild(numSquare);
});

//slider that allows users to set number of grid square
const slider = document.querySelector('.slider');
const sliderNumDisplay = document.querySelector('.slider-num-display');
const numSquare = document.createElement('p');

function createSquares (num) {
    for (i=0;i<(num*num);i++) {
    const square = document.createElement('div');
    square.style.width = `${580/num}px`;
    square.style.height = `${580/num}px`;
    square.classList.add('square');
    container.appendChild(square);
    }
}

slider.oninput = function(e) {
    const gridSquares = document.querySelectorAll('div.square');
    for (i=0;i<gridSquares.length;i++) {
        container.removeChild(gridSquares[i]);
    };

    let userNum = e.target.value
    createSquares(userNum);
    sliderNumDisplay.textContent = e.target.value;

    const newGridSquares = document.querySelectorAll('div.square');

    newGridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', (evt) => {
            if (penType === 'white') {
                whitenGridCol(evt);
                console.log("I'm white!");
            } else if (penType === 'psych') {
                changeGridCol(evt);
                console.log("I'm colourful!");
            } else if (penType === 'erase') {
                eraseGridCol(evt);
                console.log("I'm erasing you!");
            }
        })
    } )
}



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

//Toggle between colour and non-colour modes, and remove individual grid Squares of colour


const toggleColorBtn = document.querySelector('#toggle-color');
toggleColorBtn.addEventListener('click', () => {
    para.textContent="Psychedelic";
    colorModeStatus.appendChild(para);
    return penType = 'psych';
})

const toggleWhiteBtn = document.querySelector('#toggle-white');
toggleWhiteBtn.addEventListener('click', () => {
    para.textContent="White";
    colorModeStatus.appendChild(para);
    return penType = 'white';
})


//erasing individual square's bg-color

const eraserBtn = document.querySelector('#eraser')
eraserBtn.addEventListener('click', () => {
    para.textContent = 'Eraser';
    colorModeStatus.appendChild(para);
    return penType = 'erase';
} )

function eraseGridCol (evt) {
    Object.assign(evt.target.style, {
        backgroundColor: 'transparent',
        transition: "all 0.5s",
    })
}

//erase all grid colour
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    let gridSquares = document.querySelectorAll('div.square');
    let length = gridSquares.length;
    for (i=0;i<length;i++) {
        gridSquares[i].style.backgroundColor = "transparent";
    }
})

//set pen mode
gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', (evt) => {
        if (penType === 'white') {
            whitenGridCol(evt);
            console.log("I'm white!");
        } else if (penType === 'psych') {
            changeGridCol(evt);
            console.log("I'm colourful!");
        } else if (penType === 'erase') {
            eraseGridCol(evt);
            console.log("I'm erasing you!");
        }
    })
} )

