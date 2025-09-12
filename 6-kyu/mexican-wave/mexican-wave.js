function wave(str){
  return [...str].map((char, i) => {
    if (char === ' ') return null; // skip spaces
    return str.slice(0, i) + char.toUpperCase() + str.slice(i + 1);
  }).filter(Boolean); // remove nulls
}