const lowestToHighest = (a, b) => a > b
const sum = (a, b) => a + b

function sumArray(array) {
  if (array && array.length > 2) {
    return array.sort(lowestToHighest).splice(1, array.length-2).reduce(sum)
  }
  return 0
}
//^Does not work!!


//BECOMES
sumArray = a => a ? a.sort(lowestToHighest).slice(1, -1).reduce(sum, 0) : 0
