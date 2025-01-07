function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    return str.split('').filter(e => !vowels.includes(e.toLowerCase())).join('');
}