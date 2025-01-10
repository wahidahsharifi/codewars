function towerBuilder(nFloors) {
    let arr = []
    for (let i = 1; i <= nFloors * 2; i += 2) {
      let num = (nFloors * 2 - i) / 2;
      arr.push(`${' '.repeat(num)}${'*'.repeat(i)}${' '.repeat(num)}`);
    }
    return arr
}