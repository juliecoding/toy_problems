function titleCase(str){
  return str.toLowerCase().split(' ').map(function(el) {
     arr = el.split('');
     arr[0] = arr[0].toUpperCase();
     arr = arr.join('');
     return arr;
  }).join(" ");
}
//titleCase("tHE qUICK brown fox");

//BECOMES
function uppercase2(str){               //Take in a phrase
  return str.split(' ').map(word => {     //Make the phrase into an array of individual words using split. Then use map to take in each of those words, one at a time.
    return word.split('').map(letter => word.indexOf(letter) === 0 ? letter.toUpperCase() : letter.toLowerCase()).join(''); //Split that word into an array of individual letters. Map over it as well, but this time, take in a letter and use a ternary operator to test whether it's the first letter in the array. If it is, capitalize it, otherwise make it lower case. Return the newly title-cased version of the word.
    }
  ).join(' '); //Then put the array of words back together.
}
uppercase2("tHE qUICK brown fox");
