let color = "black";
let click = true

function populateSketchPad(size) {
    let sketchPad = document.querySelector('#sketchPad');
    let squares = sketchPad.querySelectorAll('div'); // this creates variable 'squares' with all it's child divs
    squares.forEach((div) => div.remove());  // this is simple arrow function associated with variable squares and it removes all child divs
    // later the 16 in parentheses will get changed into a variable to support diffrent sizes of grid
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // use backtics to embed the parameter into function by using ${}
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = (size * size);
    for (let i = 0; i < amount; i++) { // less than 256 because it's 16x16 grid
        let square = document.createElement('div');  // this will create a squares for grid
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';  // this will style the background of squares to blue
        sketchPad.insertAdjacentElement('beforeend', square);  // this will add squares inside sketchPad in the beforeend position
    }
}


populateSketchPad(16);

function changeSize(input) { // this function links size with input from the user;   the parameter name 'size' can be whatever else its just a name for a undefined number that is also referred later in the same function 
    if(input >= 2 && input <= 100) {
    populateSketchPad(input);
    } else {
    window.alert('Input is incorrect. Choose between 2 and 100');
    }
}

function colorSquare() {
    if (click) {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;  // this is from stack.overflow  idk what this is
    } else {
        this.style.backgroundColor = color;
    }
}  
}

function changeColor(choice) {
    color = choice;
}

function resetSketchPad() {
    let sketchPad = document.querySelector('#sketchPad');
    let squares = sketchPad.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white'); 
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = 'Mode: Coloring';
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring';
    }
}
})