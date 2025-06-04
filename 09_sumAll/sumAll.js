const sumAll = function(first, second) {

    let sum = 0
    let greater
    let lesser 
    
    if (first < 0 | second < 0) {
        return "ERROR"
    }

    else if (typeof first !== "number" | typeof second !== "number") {
        return "ERROR"
    }

    else if (Number.isInteger(first) !== true | Number.isInteger(second !== true)) {
        return "ERROR"
    }

    else {
        if (first < second) {
        lesser = first;
        greater = second;
    }
        else {
            lesser = second;
            greater = first;
    }
    }


    for (i = lesser; i <= greater; i++) {
        sum = sum + i;
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
