function sumPairs(ints, s) {
  let seen = new Set();
  let result = undefined
  ints.map((e,i) => {
    if(seen.has(s - e) && !result) {
      result = [s - e, e]
    } else {
      seen.add(e)
    }
  })
  return result || undefined ;
}