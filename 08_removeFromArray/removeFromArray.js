const removeFromArray = function(array, ...unwanted) {
    console.log(array);
    console.log(unwanted);

    const modifiedArray = [];

    array.forEach((element) => {
        if (!unwanted.includes(element)) {
            modifiedArray.push(element);
        }
    })

    console.log(array);
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
