function solution(number){
  if(number < 1) return 0
  let num = 0
  for(i = 3; i < number; i++) {
    if(i % 5 == 0 || i % 3 == 0) {
      num += i
    }
  }
  return num
}