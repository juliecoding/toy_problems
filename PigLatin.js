// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.includes(str[0])) {
    return str + 'way'
  }
  else {
    if (vowels.includes(str[1])) {
      return str.slice(1, str.length) + str[0] + 'ay'
    }
    else {
      return str.slice(2, str.length) + str[0] + str[1] + 'ay'
    }
  }
}
