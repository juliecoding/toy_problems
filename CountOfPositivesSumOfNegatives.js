// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array:

// C#/Java: new int[] {} / new int[0];
// C++: std::vector<int>();
// JavaScript/CoffeeScript/PHP/Haskell: [];
// Rust: Vec::<i32>::new();
// ATTENTION!

// The passed array should NOT be changed. Read more here.

// For example:

// input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// return [10, -65].

function countPositivesSumNegatives(input) {
  let countOfPositives = 0
  let sumOfNegatives = 0
  if (input !== null && input.length > 0) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countOfPositives++
      }
      else {
        sumOfNegatives += input[i]
      }
    }
    return [countOfPositives, sumOfNegatives]
  }
  return [];
}

//BECOMES
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];

    var positive = 0;
    var negative = 0;

    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }

    return [positive, negative];
}
