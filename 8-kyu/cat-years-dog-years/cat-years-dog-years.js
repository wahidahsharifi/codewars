var humanYearsCatYearsDogYears = function(humanYears) {
  const arr = [humanYears,0,0]
  for(i = 1; i <= humanYears; i++) {
    if(i == 1) {
      arr[1] += 15
      arr[2] += 15
    } else if(i == 2) {
      arr[1] += 9
      arr[2] += 9 
    } else {
      arr[1] += 4
      arr[2] += 5
    }
  }
  return arr
}
​