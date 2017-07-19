// The code provided is supposed replace all the dots . in the specified String str with dashes -

var replaceDots = function(str) {
  return str.replace(/./, '-');
}

// BECOMESss
const replaceDots = str => str.replace(/\./g, '-');
