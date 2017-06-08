//Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


String.prototype.digit = function() {
  if (this.length === 1) {
    if (this[0] === '0' || this[0] === '1' || this[0] === '2' || this[0] === '3' || this[0] === '4' || this[0] === '5' || this[0] === '6' || this[0] === '7' || this[0] === '8' || this[0] === '9') {
      return true;
    }
  }
  return false;
};

//BECOMES
String.prototype.digit = function() {
  return /^\d$/.test(this)
}
