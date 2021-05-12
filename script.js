//--------Display clicked values to screen:
function getOutput () {
    return document.querySelector(".output-value").innerHTML;
}
function printOutput (num) { 
    if (num=="") {
        document.querySelector(".output-value").innerHTML = num;   
    } else {
    document.querySelector(".output-value").innerHTML = getFormattedNumber(num);
    }
}
function getHistory () {
    return document.querySelector(".history-value").innerHTML;
}
function printHistory (num) {
    document.querySelector(".history-value").innerHTML = num;
}

function getFormattedNumber (num) {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat (num) {
    return Number(num.replace(/,/g,''))
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
        } 
  
    let buttonId = this.id;
    buttonAnimation(buttonId);
    });
}

// Eventlistener ------------ NUMBER KEYS:

var number = document.getElementsByClassName("number");

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function (){
        var output = reverseNumberFormat(getOutput());
        
        
        output = output + this.innerHTML;
        printOutput(output);
        

     let buttonId = this.id;
     buttonAnimation(buttonId);
    
                
    });
}


// ---------Button animation--------------

function buttonAnimation (currentKey) {
    
  var activeButton = document.querySelector("#" + currentKey);

activeButton.classList.add("pressed");
  
setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 100);

}
