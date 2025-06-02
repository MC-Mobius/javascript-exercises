const reverseString = function(string) {
    const stringArr = string.split("");
    let revStringArr = [];

    reversedString = ""
    for (i = 0; i < stringArr.length; i++) {
        revStringArr.unshift(stringArr[i]);
    }

    for (i = 0; i < revStringArr.length; i++) {
        reversedString = reversedString + revStringArr[i];
    }
    
    return reversedString 
};

// Do not edit below this line
module.exports = reverseString;
