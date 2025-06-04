function minValue(values){
  const numArr = []
  while(values.length > 0) {
    const lnum = Math.min(...values)
    numArr.push(lnum)
    values = values.filter(e => e != lnum)
  }
  return Number(numArr.join(''))
}