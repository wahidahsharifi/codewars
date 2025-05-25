function findAverage(array) {
  return array.length < 1 || !array ? 0 : array.reduce((a,c) => a + c, 0) / array.length;
}