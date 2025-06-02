function  calculateAge(b, n) {
  return n > b ? `You are ${n - b == 1 ? '1 year' : `${n - b} years`} old.` : b == n ? 'You were born this very year!' : `You will be born in ${b - n == 1 ? '1 year' : `${b - n} years`}.`
}