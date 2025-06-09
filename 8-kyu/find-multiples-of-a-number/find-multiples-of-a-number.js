function findMultiples(integer, limit) {
  const arr = []
  for(i = integer; i <= limit; i += integer) {
    arr.push(i)
  }
  return arr
}