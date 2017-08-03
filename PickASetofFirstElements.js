//Write a JavaScript function to get the first element of an array. Passing a parameter n (default=1) will return the first n elements of the array. If n == 0 return an empty array ([]);

const first = (arr, n = 1) => n === 0 ? [] : arr.slice(0,n)

//BECOMES
const first = (arr, n = 1) => arr.slice(0, n)
