
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things"

function spinalCase(str) {
  var test = str.split('').map(function(el) {
    if (el.toUpperCase() === el) {
      return ' ' + el.toLowerCase()
    }
    else {
      return el
    }
  }).join('').replace(/[\s_]/g, '-').replace(/\-+/g, '-')

  if (test[0] === '-') {
    return test.slice(1)
  }
  return test
}
