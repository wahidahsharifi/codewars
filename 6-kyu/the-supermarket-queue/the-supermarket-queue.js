function queueTime(customers, n) {
  if(customers.length == 0) return 0
  let counter = 0
  let obj = {}
  for(i = 0; i < n; i++) {
    obj[`t${i + 1}`] = 0
  }
  for(i = 0; counter != customers.length; i++) {
    obj[`t${Object.values(obj).findIndex(char => char == Math.min(...Object.values(obj))) + 1}`] += customers[counter]
  counter++
  }
  return Math.max(...Object.values(obj))
}