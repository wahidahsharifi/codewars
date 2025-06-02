function multiTable(n) {
  const arr = []
  for(i = 1; i < 11; i++) {
    arr.push(`${i == 1 ? i : '\n' + i} * ${n} = ${i * n}`)
  }
  return arr.join('')
}