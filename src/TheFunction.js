function duplicateCount(text){
    let duplicatedCharacters  = [];
        text.toLowerCase().split('').forEach( (char, index, charsArray) => {
        if (duplicatedCharacters.indexOf(char) < 0 && index !== charsArray.lastIndexOf(char) ) duplicatedCharacters.push(char)
        })
    return duplicatedCharacters.length;
}
