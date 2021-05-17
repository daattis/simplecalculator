//--------gets the output-value
function getOutput() {
  return document.querySelector(".output-value").innerHTML;
}
//prints the result to the output-value
function printOutput(num) {
  if (num == "") {
    document.querySelector(".output-value").innerHTML = num;
  } else {
    document.querySelector(".output-value").innerHTML = getFormattedNumber(num);
  }
}
//gets the value in the history-value
function getHistory() {
  return document.querySelector(".history-value").innerHTML;
}
//prints the history to the history-value
function printHistory(num) {
  document.querySelector(".history-value").innerHTML = num;
}
// formats the number to a comma seperated value
function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }

  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}
// converts the number back
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
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
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        // if output has a value
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }

      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output; // the output is added to the history
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }

    let buttonId = this.id;
    buttonAnimation(buttonId);
  });
}

// Eventlistener ------------ NUMBER KEYS:

var number = document.getElementsByClassName("number");

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());

    output = output + this.id;
    printOutput(output);

    let buttonId = this.id;
    buttonAnimation(buttonId);
  });
}

// ---------Button animation--------------

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("#" + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
