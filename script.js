// Calculator operators:
function calculator (num1, num2, operator) {
    return operator(num1, num2);
}


function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}


function divide (num1, num2) {
    return num1 / num2;
}


// Kutsu esim: calculator(5,5,add)

// Button animation to all buttons with a loop

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {

document.querySelectorAll(".btn")[i].addEventListener("click", function (){
    
    // Which button was pressed? Binded to a variable
    let buttonId = this.id;

    //Call function which shows an animation:
    buttonAnimation(buttonId);
    
});
}



function buttonAnimation (currentKey) {
    
  var activeButton = document.querySelector("#" + currentKey);
  
    // Add a class from CSS to a element
activeButton.classList.add("pressed");
   // palauttaa alkuperäisen classin kuvaan pienen viiveen jälkeen:
   
setTimeout(function(){
    activeButton.classList.remove("pressed");
    /// odotusaika:
}, 100);

}
