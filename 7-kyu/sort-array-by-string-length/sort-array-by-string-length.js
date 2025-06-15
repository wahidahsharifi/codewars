function sortByLength (array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest
  const longest = Math.max(...array.map(e => e.length))
  const arr = []
  for(let i = 0; i <= longest; i++) {
    array.map(e => {
      e.length == i ? arr.push(e) : null
    })
  }
    return arr;
}