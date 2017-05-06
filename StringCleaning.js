//Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s) {
    return s.replace(/\d/g, '');
}

//BECOMES 

var stringClean = s => s.replace(/\d/g, '');

stringClean('This looks5 grea8t!');