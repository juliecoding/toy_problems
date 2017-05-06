function uniteUnique(arr) {
  var megaArray = Array.from(arguments);
  var monsterArray = [];
  for (var i = 0; i < megaArray.length; i++) {
    monsterArray = monsterArray.concat(megaArray[i]);
  }
  var uniqueArray = [];
  for (var j = 0; j < monsterArray.length; j++) {
    if (uniqueArray.indexOf(monsterArray[j]) < 0) {
      uniqueArray.push(monsterArray[j]);
    }
  }
  return uniqueArray;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//BECOMES 

function uniteUnique(arr) {
  var monsterArray = [].concat.apply([], arguments).reduce(function(a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }
    return a;
  }, []);
  return monsterArray;
}


