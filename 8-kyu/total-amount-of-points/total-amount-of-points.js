function points(games) {
  return games.reduce((a,c) => Number(c.split(':')[0]) > Number(c.split(':')[1]) ? a += 3 : Number(c.split(':')[0]) == Number(c.split(':')[1]) ? a += 1 : a, 0)
}