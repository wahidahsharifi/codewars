function stockList(books, categories) {
  let obj = {...categories}
  const book = books.filter(e => categories.includes(e.slice(0,1)))
  const booky = book.map(e => categories.includes(e.slice(0,1)) && obj[e.slice(0,1)] == undefined ? obj[e.slice(0,1)] = Number(e.match(/\d+/g)) : obj[e.slice(0,1)] += Number(e.match(/\d+/g)))
  const result = `${categories.map(e => `(${e} : ${obj[e] == undefined ? 0 : obj[e]}) - `).join('').slice(0, -3)}`
  return books.length == 0 ? '' : result
}