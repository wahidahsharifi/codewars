function expandedForm(num) {
   return `${num}`
      .split("")
      .reverse()
      .map((e, i) => e * Math.pow(10, i))
      .filter((e) => e != 0)
      .reverse()
      .join(" + ");
}