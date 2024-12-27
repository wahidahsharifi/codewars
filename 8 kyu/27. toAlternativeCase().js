String.prototype.toAlternatingCase = function () {
  return this.split('').map(e => (e == e.toLowerCase()) ? e.toUpperCase() : e.toLowerCase()).join('')
}