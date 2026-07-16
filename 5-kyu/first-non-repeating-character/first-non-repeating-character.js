function firstNonRepeatingLetter(s) {
  const str = s.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    let dup = false;
    
    for(let nestedI = 0; nestedI < str.length; nestedI++) {
      if(str[nestedI] == str[i] && nestedI !== i) {
        dup = true
        break
      }
    }
    
    if (dup) {
      continue
    }
    return s[i]
  }
  return ""
}