function findOdd(A) {
    return A.reduce((a,c) => a ^ c);
}