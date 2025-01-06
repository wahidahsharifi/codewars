function sortArray(array) {
    const odd = array.filter(e => e % 2).sort((a,b) => a -b)
    return array.map(a => a % 2 ? odd.shift() : a)
}