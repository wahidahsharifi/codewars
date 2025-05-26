function findNb(m) {
    for(i = 1; i < m; i++) {
      const res = ((i * (i + 1)) / 2) ** 2
      if(res == m) return i 
      if(res > m) return -1
    }
}
​