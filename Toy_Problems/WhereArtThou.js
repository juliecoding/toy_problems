function whereAreYou(collection, source) {
  
  collection.forEach(function(el) {
    for (var prop in el) {
      if (source[prop] === el[prop]) {
        arr.push(el);
      }
    }
  });
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

