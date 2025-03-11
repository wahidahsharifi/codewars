function dnaStrand(dna){
  return dna
          .replace(/[AT]/g, match => match === 'A' ? 'T' : 'A')
          .replace(/[GC]/g, match => match === 'G' ? 'C' : 'G')
}