function findLongest(array){
  const maxLength = `${Math.max(...array)}`.length
  return array.find(e => `${e}`.length === maxLength)
}