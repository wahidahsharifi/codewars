function rowWeights(arr){
  let t = [0,0]
  arr.map((e,i) => i % 2 == 0 ? t[0] += e : t[1] += e)
  return t
}