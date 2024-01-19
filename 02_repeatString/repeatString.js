const repeatString = function(word, repeats) {
    if(repeats < 0) {
        return 'ERROR';
    }
    let newWord = '';
    for(let i = 0; i < repeats; i++) {
        newWord = newWord.concat(word);
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
