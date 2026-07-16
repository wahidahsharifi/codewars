function whoIsPaying(name){
  if(name.length < 3) {
    return [name]
  }
  
  return [name, name.slice(0, 2)]
}