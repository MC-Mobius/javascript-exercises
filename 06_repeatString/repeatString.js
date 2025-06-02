const repeatString = function(string, num) {
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
