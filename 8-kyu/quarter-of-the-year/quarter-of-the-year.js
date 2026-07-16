const quarterOf = (month) => {
  if(month > 12 || month < 1) {
    return "err"
  }
  
  let counter = 0
  for(let i = month; i > 0; i -= 3) {
    counter++
  }
  return counter
}