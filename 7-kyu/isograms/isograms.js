function isIsogram(str){
  return str.toLowerCase().split('').reduce((a,c) => a.includes(c) ? a += 'F' : a += c,'') == str.toLowerCase() ? true : false
}