//Define to_alternating_case(char*) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:


String.prototype.toAlternatingCase = function() {
  const reverse = function(el) {
    if (el.match(/[A-Z]/ )) {
      return el.toLowerCase();
    }
    return el.toUpperCase();
  }
  return this.split('').map(reverse).join('');
}

//BECOMES
String.prototype.toAlternatingCase = function() {
  return this.split("").map(a => a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}
