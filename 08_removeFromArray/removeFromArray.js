const removeFromArray = function(array, unwanted) {
    console.log(array);
    console.log(unwanted);
    for (i = 0; i < array.length; i++) {
        if (array[i] === unwanted) {
            array.splice(i, 1);
        }
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
