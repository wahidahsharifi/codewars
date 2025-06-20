function digitalRoot(n) {
  while(String(n).length > 1) {
    n = String(n).split('').reduce((a,c) => a + Number(c),0)
  }
  return n
}