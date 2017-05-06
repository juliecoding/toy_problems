function myReplace(longStr, oldValue, newValue) {
  
  var testArr = oldValue.split("");
  var newNewArr = newValue.split("");
  if (testArr[0] === testArr[0].toUpperCase) {
    newNewArr[0].toUpperCase();  
  }
  else {
    newNewArr[0].toLowerCase();  
  }
    newValue = newNewArr.join("");      
  
  var oldValueRegExp = new RegExp(oldValue,"g");
  var newValueRegExp = new RegExp(newValue, "g");
  
  var newStr = longStr.replace(oldValueRegExp, newValue);
  
  return newStr;
}


myReplace("Let us get back to more Coding", "Coding", "algorithms");


//TO 

function myReplace(longStr, oldValue, newValue) {
  var capitalize = function(source, target) {
    if (oldValue.charAt(0) === oldValue.charAt(0).toUpperCase()) {
      target = target[0].toUpperCase() + target.slice(1);
    } else {
      target = target[0].toLowerCase() + target.slice(1);
    }
    return target;
  };
  return longStr.replace(oldValue, capitalize(oldValue, newValue));
}

myReplace("Let us get back to more coding", "coding", "Algorithms");
myReplace("His name is Tom", "Tom", "john");