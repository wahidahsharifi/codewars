function titleCase(title, minorWords = '') {
  if(title == '') return ''
  minorWords = minorWords.toLowerCase().split(' ')
  let word = ''
  title.toLowerCase().split(' ').map((e,i) => {
    e.split('').map((ee,ii) => {
      if(ii == 0 && i == 0) {
        word += ee.toUpperCase()
      } else if(minorWords.includes(e.toLowerCase()) && ii == 0) {
        word += ' ' + ee
      } else if(ii == 0) {
        word += ' ' + ee.toUpperCase()
      } else {
        word += ee
      }
    })
  })
  return word
}