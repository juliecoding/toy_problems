function numberToPower(number, power){
  var accumulator = 1
  if (power === 0) return 1
  for (var i = 0; i < power; i++) {
    accumulator *= number
  }
  return accumulator
}

//BECOMES
const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1;
//just so sad I didn't come up with this one^
