function race(v1, v2, g) {
  if (v1 >= v2) return null;
  
  let timeInSeconds = g * 3600 / (v2 - v1);
  
  return [timeInSeconds / 3600, (timeInSeconds % 3600) / 60, timeInSeconds % 60].map(e => parseInt(e));
}