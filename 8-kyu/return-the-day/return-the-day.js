function whatday(num) { 
  return num > 7 || num < 1 ? 'Wrong, please enter a number between 1 and 7' : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][num - 1]
}