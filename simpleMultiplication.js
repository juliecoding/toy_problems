//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = n => n % 2 ? n * 8 : n * 9

//BECOMES 
const simpleMultiplication = n => n * (n % 2 ? 9 : 8)