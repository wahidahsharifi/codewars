var number=function(array){
    let result = []
    array.forEach((a, c) => {
      result.push(`${c+1}: ${a}`)
    })
    return result;
}