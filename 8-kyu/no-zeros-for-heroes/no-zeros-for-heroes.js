function noBoringZeros(n) {
  const result = Number(`${Number(`${Math.abs(n)}`.split('').reverse().join(''))}`.split('').reverse().join(''))
  return n < 0 ? result * -1 : result
}