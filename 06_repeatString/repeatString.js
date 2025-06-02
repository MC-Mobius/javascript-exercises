const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    
    let i = 0;
    let print = ""
    while (i < num) {
        print = print + string;
        i ++;
    }
    return print
};

// Do not edit below this line
module.exports = repeatString;
