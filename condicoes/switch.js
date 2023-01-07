// Switch

let x = 1;

switch (x) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    break;
  case 3:
    console.log("C");
    break;
  default:
    console.log("não esta na lista");
    break;
}

function calculadora(number1, operador, number2) {
  let total;

  switch (operador) {
    case "+":
      total = number1 + number2;
      break;
    case "-":
      total = number1 - number2;
      break;
    case "*":
      total = number1 * number2;
      break;
    case "/":
      total = number1 / number2;
      break;
    default:
      console.log("O operador não esta na lista");
  }

  console.log(total);
}

calculadora(2, "*", 4);
