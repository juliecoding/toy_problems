var lodashUniq = require('lodash.uniq');
//What we have
var list = [
    { date: '12/1/2011', reading: 3, id: 20055, name: "Joe" },
    { date: '13/1/2011', reading: 5, id: 20053, name: "Joe" },
    { date: '14/1/2011', reading: 6, id: 45652, name: "Sam" },
    { date: '14/1/2011', reading: 7, id: 45653, name: "Sam" },
    { date: '14/1/2011', reading: 8, id: 45654, name: "Sam" }
];

//What we want
// var obj = {
//   "Joe": [{joeObj1}, {joeObj2}],
//   "Sam": [{samObj1}, {samObj2}, {samObj3}]
// };


function arrayToObj(arr) {
  var newArr = [];
  var root = {};
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].name);
    newArr = lodashUniq(newArr);
  }
  for (var j = 0; j < newArr.length; j++) {
    root[newArr[j]] = [];
  }
  for (var k = 0; k < arr.length; k++) {
    for (var prop in root) {
      if (arr[k].name === prop) {
        root[prop].push(arr[k]);
      }
    }
  }
  return root;
}

arrayToObj(list);
