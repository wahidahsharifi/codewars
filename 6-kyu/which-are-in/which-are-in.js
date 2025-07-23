function inArray(array1,array2){
  const arr = []
  array1.forEach(e => {
    array2.some(a => a.includes(e)) ? arr.push(e) : null
  })
  return arr.sort()
}