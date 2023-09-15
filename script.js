const divPanel = document.querySelector("#panel");
const inputRow = document.querySelector("#row");
const inputColumn = document.querySelector("#column");


/**
 * Create a grid based on entered values and assign ids with click events
 */
function generateGrid() {

    let row = parseInt(inputRow.value);
    let column = parseInt(inputColumn.value);

    divPanel.innerHTML = "";

    for (let i = 0; i < row; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.className = "row";

        generateColumns(column, i, rowDiv);

        divPanel.appendChild(rowDiv);
    }

    assignIdsAndAlerts();
    
}


/**
 * Generates the columns within a row for the grid
 * @param {*} column Numbers of columns that are generated in the row
 * @param {*} i Determine wheter a check box is black or white 
 * @param {*} rowDiv The generated columns will be attached to this row
 */
function generateColumns(column, i, rowDiv) {

    for (let j = 0; j < column; j++) {
        let boxDiv = document.createElement("div");
        boxDiv.className = "box";
        if ((i + j) % 2 === 0) {
            boxDiv.classList.add("black");
        } else {
            boxDiv.classList.add("white");
        }
        rowDiv.appendChild(boxDiv);
    }
}


/**
 * Creates IDS and displays alerts with their respective positions
 */
function assignIdsAndAlerts() {
    
    let boxes = document.querySelectorAll(".box");
    let columnCount = parseInt(inputColumn.value);

    boxes.forEach((box, index) => {
        let row = Math.floor(index / columnCount);
        let col = index % columnCount;
        box.id = `${row}-${col}`;
        
        box.addEventListener("click", () => {
            alert(`Panel: box ${row}-${col}`);
        });
    });
}


















