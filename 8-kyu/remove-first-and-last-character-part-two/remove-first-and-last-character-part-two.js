function array(string) {
  return string.split(',').length > 2 ? string.split(',').slice(1,-1).join(' ') : null
}