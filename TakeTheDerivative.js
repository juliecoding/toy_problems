// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent. Your coefficient should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7).
//
// The output of this function should be a string! The exponent will never be 1, and neither number will ever be 0.

//derive(7,8) // in this case, the function should multiply 7  and 8, and then subtract 1 from 8.
//derive(7,8) // this should output "56x^7"


function derive(coefficient,exponent) {
  var minus1 = exponent - 1;
  return (coefficient * exponent).toString() + 'x^' + minus1;
}

//BECOMES
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent-1}`
}

//All hail ES6 :P
