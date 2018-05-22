function addTogether() {
    var numOne = arguments[0]
    if (typeof(numOne) !== 'number') {
        return undefined;
    }
    
    if (arguments.length === 2) {
        if (typeof(arguments[1]) === 'number') {
            return numOne + arguments[1];
        }
        return undefined;
    }
    
    return function() {
        console.log(numOne);
    }
    
}

addTogether(2,3);

//must be numbers
//if 2 sent add together
//if one sent send back a function to chain to a function chain instead of a dot chain.