function multiplicationTable(size) {
  const arr = []
  for(i = 1; i <= size; i++) {
    arr.push([])
    for(e = 1; e <= size; e++) {
      arr[i - 1].push(e * i)
    }
  }
  return arr
}