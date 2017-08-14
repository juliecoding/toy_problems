const sumMix = x => {
  if (x.length > 1) {
    return x.reduce((a, b) => Number(a) + Number(b))
  }
  return Number(x[0])
}

//OR
const sumMix2 = x => x.length > 1 ? x.reduce((a, b) => a * 1 + b * 1) : x[0] * 1

//OR
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}
