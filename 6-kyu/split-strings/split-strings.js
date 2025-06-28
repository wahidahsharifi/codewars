function solution(str){;
  const newStr = str.length % 2 != 0 ? str += '_' : str
  arr = []
  for(i = 0; i < newStr.length; i += 2) {
    arr.push(newStr[i] + newStr[i + 1])
  }
  return arr
}