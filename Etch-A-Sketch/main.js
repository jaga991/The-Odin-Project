var containerMain = document.createElement('div');
containerMain.setAttribute('id', 'container-main');

function gridSquareCreate(num) {
    for(let i = 0; i < (num * num); i++){
        let gridSquare = document.createElement('div');
        gridSquare.className += "grid-square";
        containerMain.appendChild(gridSquare);
    }
}

document.body.appendChild(containerMain);
gridSquareCreate(16);
