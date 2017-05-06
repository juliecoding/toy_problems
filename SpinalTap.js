function spinalCase(str) {
  str = str.replace(/_/g, " ");
  return str.split(" ").map(function(el) {return el.toLowerCase()}).join("-");
}

spinalCase('This Is Spinal Tap');
 

//AND THEN: 




//INFINITE LOOP STYLE: 

// function spinalCase(str) {
//   var newStr = str.replace(/_/g, " ");
  
//   for (var i = 0; i < newStr.length; i++) {
//     if (newStr[i].match(/[A-Z]/)) {
//       var awesomeSauce = " " + newStr[i];
//       newStr = newStr.replace(newStr[i], awesomeSauce);
//     }
//   }
//   return newStr.split(" ").map(function(el) {return el.toLowerCase()}).join("-");
// }
