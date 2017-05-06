// Write a function that takes in a string.  That string may or may not have a number at the end of it.

// If the string has a number at the end, increment that number by one, maintaining the same number of digits as the original number if possible.
// E.G.: Word001 becomes Word002.  Word099 becomes Word100. Word0099 becomes Word0100.

// You may increase the length of the original number only if necessary:
// E.G.: Word999 becomes Word1000. 

// If the string has no number at the end, add the number 1 to the end of it.
// E.G. "Tacos" becomes "Tacos1"

// Return the result as a concatenated string.


function stringNumbers(str) {
    var hiddenNumber = str.match(/\d/g);
    if (hiddenNumber === null) {
        str += 1;
        return str;
    } else {
        hiddenNumber = hiddenNumber.join("");
        hiddenNumber *= 1;
        newStr = str.replace(hiddenNumber, (hiddenNumber + 1));

        if (newStr.length > str.length && newStr.match(/^0[1-9]/) !== null) {
            newStr = newStr.replace("0", "");
        }
        return newStr;
    }
}

//BECOMES