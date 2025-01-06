function count(string) {
    let result = {};
    
    string.split('').forEach((letter) => {
      if (!result[letter]) {
        result[letter] = 1;
      } else {
        result[letter] +=1;
      }
    })
    
    return result;
}