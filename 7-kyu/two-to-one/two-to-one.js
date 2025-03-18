function longest(s1, s2) {
  return (s1 + s2).split('').sort().reduce((a,c) => (a.includes(c) || a.push(c), a),[]).join('')
}