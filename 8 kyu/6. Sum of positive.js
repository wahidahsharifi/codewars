function positiveSum(arr) {
    return arr.filter(each => each > 0).reduce((a, c) => a + c, 0)
}