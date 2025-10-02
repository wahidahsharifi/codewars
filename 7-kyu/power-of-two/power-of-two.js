function isPowerOfTwo(n){
  if(n == 1) {
    return true
  }
  for(let i = 1; i < n; i = i * 2) {
    if(i * 2 === n) {
      return true
    }
  }
  return false
}