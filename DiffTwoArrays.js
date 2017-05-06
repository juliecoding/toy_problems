function diffArray(arr1, arr2) {
  var newArr = [];
  
  arr1.filter(function(el) {
    if (arr2.indexOf(el) === -1) {
      newArr.push(el);
    }
  });
  arr2.filter(function(el) {
    if (arr1.indexOf(el) === -1) {
      newArr.push(el);
    }
  });
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//BECOMES 


function diffArray(arr1, arr2) {
  var newArr = [];
  
  var concatArr = arr1.concat(arr2);
  
  concatArr.filter(function(el) {
    if (arr1.indexOf(el) === -1 || arr2.indexOf(el) === -1) {
      newArr.push(el);
    }
  });
  return newArr;
}

//BECOMES 

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

//BECOMES 

function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}
