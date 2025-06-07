function position(letter){
  return `Position of alphabet: ${[...'abcdefghijklmnopqrstuvwxyz'].findIndex(char => char === letter) + 1}`
}