/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

function high(x) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let obj = {};
    x.toLowerCase().split(' ')
        .forEach((e,i) => {
            obj[e] = 1
            e.split('').map(a => alphabets.indexOf(a) != -1 ? obj[e] += alphabets.indexOf(a) + 1 : false)
        })
    for (let word in obj) {
        obj[word] == Math.max(...Object.values(obj)) ? obj = word : null;
    }
    return obj;
}