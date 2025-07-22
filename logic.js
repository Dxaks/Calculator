// declaration of global variables

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const display = document.querySelector(".screen");
const equalSign = document.getElementById("equalSign");
let num1 = "";
let num2 = "";
let operatorValue = "";
let result = "";
let justCalculated = false;

// declaration of functions for operations
// add, multiply, divide, subtract, power, factorial
const add = (n1, n2) => n1 + n2;
const multiply = (n1, n2) => n1 * n2;
const divid = (n1, n2) => n1 / n2;
const substract = (n1, n2) => n1 - n2;
const power = (n1, n2) => Math.pow(n1, n2);
const factorial = (n) => {
  if (n == 0) n = n + 1;
  let arr = [];
  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a * b);
};

// event listener for each button click 
number.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    if (justCalculated && !operatorValue) {
      num1 = "";
      num2 = "";
      result = "";
      display.textContent = "";
      justCalculated = false;
    }

    let click = event.target.textContent;

    if (!num1) {
      num1 = click;
    } else if (num1 && !operatorValue) {
      num1 += click;
    } else if (num1 && operatorValue) {
      num2 += click;
    }

    if (!operatorValue) {
      display.textContent = num1;
    } else {
      display.textContent = num2;
    }
  })
);

// event listener for each operator button click
operator.forEach((btn) =>
  btn.addEventListener("click", (event) => {

    if (num1 !== "" && num2 !== "" && operatorValue !== "") {
      calculateNumbers()
    }
    
     operatorValue = event.target.textContent;

    if (operatorValue === "C") {
      clear();
      return;
    }
  })
);

// event listener for equal sign button click
equalSign.addEventListener("click", () => {
  if (operatorValue === "n!") {
      result = factorial(parseInt(num1));
      display.textContent = result;
      num1 = result;
      num2 = "";
      justCalculated = true;
      return;
  }
  
  if (num1 !== "" && num2 !== "" && operatorValue !== "") {
      calculateNumbers();
    }

});

// function to calculate the result based on the operator and numbers
function calculateNumbers() {
  if (operatorValue === "+") {
        result = add(parseInt(num1), parseInt(num2));
      } else if (operatorValue === "-") {
        result = substract(parseInt(num1), parseInt(num2));
      } else if (operatorValue === "*") {
        result = multiply(parseInt(num1), parseInt(num2));
      } else if (operatorValue === "/") {
        if (num2 === "0") {
          display.textContent = "Error";
          num1 = "";
          num2 = "";
          operatorValue = "";
          return;
        }
        result = divid(parseInt(num1), parseInt(num2));

      } else if (operatorValue === "x**n") {
        result = Math.pow(parseInt(num1), parseInt(num2));
      }

      display.textContent = result;
      num1 = result;
      num2 = "";
      operatorValue = "";
      justCalculated = true;
}

// function to clear the display and reset variables
const clear = () => {
  display.textContent = 0;
  num1 = "";
  num2 = "";
  operatorValue = "";
  justCalculated = false;
};


