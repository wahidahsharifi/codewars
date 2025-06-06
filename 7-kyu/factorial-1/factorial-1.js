function factorial(n){
  if(n == 0) return 1
  let num = 1
  for(i = n; i > 1; i--) {
    num = num * i
  }
  return num
}