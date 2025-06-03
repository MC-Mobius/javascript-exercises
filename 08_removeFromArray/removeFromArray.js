const removeFromArray = function(array, ...unwanted) {

    const modifiedArray = [];

    array.forEach((element) => {
        if (!unwanted.includes(element)) {
            modifiedArray.push(element);
        }
    })

    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
