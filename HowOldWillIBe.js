// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more courious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

const calculateAge = (birthYear, yearInQuestion) => {
  let age = Math.abs(birthYear - yearInQuestion);
  if (birthYear === yearInQuestion) {
    return "You were born this very year!"
  } else if (birthYear < yearInQuestion) {
    return age === 1 ? `You are ${age} year old.` : `You are ${age} years old.`
  } else {
    return age === 1 ? `You will be born in ${age} year.` : `You will be born in ${age} years.`
  }
}

//BECOMES 

function calculateAge(y1, y2) {
  var dif = y2 - y1;
  var s = Math.abs(dif) === 1 ? "" : "s";
  return dif > 0 ? `You are ${dif} year${s} old.` : (dif < 0 ? `You will be born in ${Math.abs(dif)} year${s}.` : `You were born this very year!`);
}