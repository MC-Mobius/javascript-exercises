const removeFromArray = function(array, unwanted) {
    for (i = 0; i < array.length; i++) {
        if (i === unwanted) {
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
