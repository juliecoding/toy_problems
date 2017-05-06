//Write a function called repeatStr which repeats the given string string exactly n times.

//repeatStr(6, "I"); returns "IIIIII"


const repeatStr = (n,s) => {
  let concatenatedStr = '';
  for (let i = 0; i < n; i++) {
    concatenatedStr += s;
  }
  return concatenatedStr;
};

//BECOMES
function repeatStr (n, s) {
  return s.repeat(n);
}

//BECOMES
const repeatStr = (n, s) => s.repeat(n);
