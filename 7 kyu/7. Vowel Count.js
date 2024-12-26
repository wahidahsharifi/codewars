function getCount(str) {
    let num = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (char of str) {
      if(vowels.includes(char)) {
        num += 1;
      }
    }
    return num
}