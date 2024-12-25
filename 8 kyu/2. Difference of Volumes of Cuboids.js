function findDifference(a, b) {
    return Math.abs((a.reduce((acc, c) => acc * c)) - (b.reduce((acc, c) => acc * c)));
}