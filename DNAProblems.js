function pairElement(str) {
  var megaArray = [];
  var newArr = str.split("");
  console.log(newArr);
  for (var i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case 'A': 
        console.log(newArr[i]);
        megaArray.push([newArr[i], "T"]);
        break;
      case 'T':
        megaArray.push([newArr[i], "A"]);
        break;
      case 'C':
        megaArray.push([newArr[i], "G"]);
        break;  
      case 'G':
        megaArray.push([newArr[i], "C"]);
        break;        
    }
  }
  return megaArray;
}

pairElement("ACG");

//BECOMES

function pairElement(str) {
  var pairMap = {T: 'A', A: 'T', G:'C', C:'G'};
  
  return str.split('').map(function(el) {
    return [el, pairMap[el]];
  });
}