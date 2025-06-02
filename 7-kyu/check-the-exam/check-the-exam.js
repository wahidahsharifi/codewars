function checkExam(c, s) {
  const res = c.reduce((a,cu,i) => c[i] == '' || s[i] == '' ? a + 0 : c[i] == s[i] ? a + 4 : a + -1, 0)
  return res < 1 ? 0 : res
}