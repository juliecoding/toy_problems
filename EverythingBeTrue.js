function truthCheck(collection, pre) {
  testValue = true;
  for (var i = 0; i < collection.length; i++) {
      if (!collection[i][pre]) {
        testValue = false;
      }
  }
  return testValue;  
}

//BECOMES 

function truthCheck(collection, pre) {
  testValue = true;
  collection.forEach(function(el) {
    if (!el[pre]) {
      testValue = false;
    }
  });
  return testValue;  
}

