function order(words){
  return words.split(' ').sort((a, b) => Number(a.match(/\d+/g)) - Number(b.match(/\d+/g))).join(' ')
}