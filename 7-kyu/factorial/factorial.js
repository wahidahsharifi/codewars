function factorial(n) {
  if(n < 0 || n > 12 ) {
    throw new RangeError(`input is ${n}, it must be between 0 - 12`)
  } else if(n == 0) {
    return 1
  }
  const arr = []
  for(i = n; i > 0; i--) {
    arr.push(i)
  }
  return arr.reduce((a,c) => a * c)
}