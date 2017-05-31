// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]



function squareOrSquareRoot(arr) {
  return arr.map(function(el) {
    var squareRoot = Math.sqrt(el)
    console.log(squareRoot);
    if (squareRoot.isInteger()) {
      return Math.sqrt(el);
    }
    return el * el;
  })
}

//BECOMES 
const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));

//Without ES6
function squareOrSquareRoot(arr) {
  return arr.map(function(el) {
    return Math.sqrt(el) % 1 === 0 ? Math.sqrt(el) : (el * el);
  });
}