const removeFromArray = function(inputs, ...args) {
    let arr = []
    arr = inputs.filter((input) => {
        for(let i = 0; i < args.length; i++) {
            if(input === args[i]) {
                return false;
            }
        }
        return true;
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
