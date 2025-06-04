function sumOfMinimums(arr) {
  return arr.reduce((a,c) => Math.min(...c) + a,0)
}