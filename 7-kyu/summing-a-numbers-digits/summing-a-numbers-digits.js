function sumDigits(n) {
  return `${Math.abs(n)}`.split('').reduce((a,c) => a + Number(c),0)
}