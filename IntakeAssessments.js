// Create a function called 'reversedLooper' that when passed an array will loop through it backwards and subtract 2 from the last element, 1 from the second to last, 0 from to the third to last, add one to the fourth to last, add 2 to the fifth to last. Continue increasing the amount added by 1, until it reaches the front of the array.  Return the list when you are done

// Code Here
function reversedLooper(arr) {
  var counter = 2
	for (var i = arr.length-1; i >= 0; i--) {
    arr[i] -= counter
    counter -= 1
  }
  return arr
}

reversedLooper([1, 2, 3, 4, 5, 6, 7])


//
function last(arr) {
	return arr[arr.length-1]
}

last([1, 2, 3])


//
function looper(arr) {
  return arr.map(el => el + 5)
}

looper([1, 2, 3]);

//
var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.

//code here
function oddsAndEvens(nums) {
	nums.forEach(function(el){
	  el % 2 === 0 ? evens.push(el) : odds.push(el)
	})
}

oddsAndEvens([1, 2])

//Create a function called exponent that takes in two parameters, the first parameter should represent a number to be multiplied against itself and the second parameter should represent how many times it is multiplied by itself. The function should return the result of this operation. exponent(2,3) should return 8

function exponent(base, power) {
	var steadyOn = base
	for (var i = 1; i < power; i++) {
    	steadyOn *= base
    }
  	return steadyOn;
}
exponent(2, 3)

//Add 10 to numbers and strings of numbers in an array.
var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

function addTen(numbers) {
  return numbers.map(el => +el + 10 )
}

addTen(numbers)

// Create a newCar function that takes in two parameters: make and model.
// Using those parameters create a car object, give it make and model properties, and return it from the function
