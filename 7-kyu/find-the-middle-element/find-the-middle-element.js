function gimme(triplet) {
  return [...triplet].map((e,i) => e === triplet.sort((a, b) => a - b)[parseInt(triplet.length / 2)] ? i : null).filter(e => e != null)[0]
}