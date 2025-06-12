function getGrade (s1, s2, s3) {
  const score = s1 + s2 + s3
  return score > 269 ? 'A' : score > 239 ? 'B' : score > 209 ? 'C' : score > 179 ? 'D' : 'F'
}