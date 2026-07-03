function revrot(str, sz) {
  if(!sz || !str) {
    return "";
  }
  
  const chunks = [];
​
  // build sz sized chunks & ignore the rest of chars if a nz sized chunk can't be built out of.
  for(let i = 0; (i + sz) <= str.length; i += sz) {
    let chunk = str.slice(i, i + sz)
​
    const sumOfChunk = sumOfNums(chunk);
​
    if(sumOfChunk % 2 === 0) {
      chunk = chunk.split('').reverse().join("")
    } else {
      chunk = rotateText(chunk)
    }
    
    chunks.push(chunk)
  }
​
  if(!!chunks.length) {
    return chunks.join("")
  }
  
  return ""
}
​
function sumOfNums(num) {
  return num.split('').reduce((a,c) => a + +c, 0);
}
​
function rotateText(text) {
  return text.slice(1) + text[0]
}