var colors = generateRandomColors(6);
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");



for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
}

function reset(){
    colors = generateRandomColors(numSquares);
    //Pick new random color
    pickedColor = pickColor();
    //Change color display to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = ""
    this.textContent = "New Colors"
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        }else {
            squares[i].style.display = "none";
            }
        }
 h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
 reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
  //add click listeners to square
    squares[i].addEventListener("click", function(){
       //Grab color of clicked square
        var clickedColor = this.style.backgroundColor
       //Compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}


function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
     //change each color to match correct color
     squares[i].style.backgroundColor = color;  
    }   
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
//make an array
var arr = []
//add num random colors to arr
for(var i = 0; i < num; i++){
//get random color and push into arr
arr.push(randomColor())

}
//return that array
return arr;
}

function randomColor(){
    //pick an red value
    var r = Math.floor(Math.random() * 256)
    //pick a gree value
    var g = Math.floor(Math.random() * 256)
    //pick a blue value
    var b = Math.floor(Math.random() * 256)
    
    return "rgb(" + r + ", " + g + ", " + b + ")";

}

