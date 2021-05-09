//Display clicked values to screen:
function getOutput () {
    return document.querySelector("p.output-value").innerHTML;
}
function printOutput (num) { 
    document.querySelector("p.output-value").innerHTML = num;
    }
function getHistory () {
    return document.querySelector("p.history-value").innerHTML;
}
function printHistory (num) {
    document.querySelector("p.history-value").innerHTML = num;
}

// Eventlistener ------------ OPERATOR KEYS:

var operator = document.getElementsByClassName("operator");

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
        
        // C/erase -> clear the screen
        if (this.id == "C") {
            printOutput("");
            printHistory("");
        } else if (this.id == "CE") {
            printOutput("");
        } else if (this.id == "erase") {
            let currentValue = document.querySelector("p.output-value").innerHTML;
            let erasedValue = currentValue.slice(0,(currentValue.length - 1));
            printOutput(erasedValue);
        } 
  
    let buttonId = this.id;
    buttonAnimation(buttonId);
    });
}

// Eventlistener ------------ NUMBER KEYS:

var number = document.getElementsByClassName("number");


for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (){
    
     let buttonId = this.id;
     buttonAnimation(buttonId);

    printOutput(this.innerHTML);
         
    });
}


// Button animation

function buttonAnimation (currentKey) {
    
  var activeButton = document.querySelector("#" + currentKey);

activeButton.classList.add("pressed");
  
setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 100);

}
