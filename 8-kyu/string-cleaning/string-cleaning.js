function stringClean(s){
  return s.split('').filter(e => !Number(e) && e != '0').join('')
}