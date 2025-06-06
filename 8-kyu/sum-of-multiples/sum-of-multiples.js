function sumMul(n,m){
  let [ns, na] = [n, 0]
  while(ns < m) {
    na += ns
    ns += n
  }
  return n == ns ? 'INVALID' : na
}