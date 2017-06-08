Complete the squareSum method so that it squares each number passed into it and then sums the results together.

const squareSum = numbers => numbers.map(el => el * el).reduce((a, b) => a + b)
