const sumAll = function(first, second) {

    let sum = 0
    let greater
    let lesser 
    
    if (first < second) {
        lesser = first;
        greater = second;
    }
    else {
        lesser = second;
        greater = first;
    }

    for (i = lesser; i <= greater; i++) {
        sum = sum + i;
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
