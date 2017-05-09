//Not a problem, just practicing using https://medium.com/@_jh3y/throttling-and-debouncing-in-javascript-b01cad5c8edf 

var debounce = function(func, delay) {
    var inDebounce = undefined;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(inDebounce);
        return inDebounce = setTimeout(function() {
            return func.apply(context, args);
        }, delay);
    }
}

debounceBtn.addEventListener('click', debounce(function() {
    return console.log('Hey! It is', new Date().toUTCString());
}, 3000));