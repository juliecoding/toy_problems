// Number of people in the bus

// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided a list (or array in JS) of integer arrays. Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item).

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.


let busPeople = [
  [4, 0],
  [2, 2],
  [3, 1],
  [10, 5]
];

//so, you need to reduce each little array, then add the result to a big sum. 

const subtractSecondValue = (a, b) => a - b;
const addition = (a, b) => a + b;

const number = function(arr) {
  return arr
    .map(function(el) {
      return el.reduce(subtractSecondValue)
    })
    .reduce(addition);
}


//BECOMES 
const subtractSecondValue = (a, b) => a - b;
const addition = (a, b) => a + b;

const number = function(arr) {
  return arr
    .map(function(el) {
      return el.reduce(subtractSecondValue)
    })
    .reduce(addition);
}


//BECOMES
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// which sans es6 looks like: 
// function number(busStops) {
//   busStops.reduce(function(rem, [on, off]) {
//     return rem + on - off;
//   }, 0);
// }