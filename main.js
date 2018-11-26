var num1 = prompt("please enter the first number");
var num2 = prompt("please enter the second number");
var operator = prompt("enter the operator");

num1 = parseInt(num1);
num2 = parseInt(num2);

var result;

switch (operator) {

  case "/":
    result = num1 / num2;
    alert(result);
    break;
  case "*":
    result = num1 * num2;
    alert(result);
    break;
  case "-":
    result = num1 - num2;
    alert(result);
  default:
    result = num1 + num2;
    alert(result);
    break;
}