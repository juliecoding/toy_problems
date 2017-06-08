//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


function fakeBin(x) {
  x = x.split('')
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      x[i] = 0
    }
    else x[i] = 1
  }
  return x.join('')
}

//BECOMES
function fakeBin(x) {
  const reassignment = el => el < 5 ? el = 0 : el = 1
  return x.split('').map(reassignment).join('')
}

//BECOMES
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
