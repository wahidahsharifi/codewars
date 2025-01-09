function duplicateEncode(word){
    return word.toLowerCase().split('').map((e,i,w) => w.indexOf(e) == w.lastIndexOf(e) ? '(' : ')').join('')
}