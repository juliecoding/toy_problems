function steamrollArray(arr) {
  var newArr = [];
  function innerSteamroll(val) {
    if (Array.isArray(val)) {
        for(var i = 0; i < val.length; i++) {
          innerSteamroll(val[i]);
        }
      }
    else {
      newArr.push(val);
    }
  }
  innerSteamroll(arr);
  return newArr;
}


//BECOMES:
function steamrollArray(arr) {
  return arr.reduce(function(a, b) a.concat(Array.isArray(b) ? steamrollArray(b) : [b], []);
}



//This does not work, but why? 

function steamrollArray(arr) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      steamrollArray(arr[i]);
    }
    else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
