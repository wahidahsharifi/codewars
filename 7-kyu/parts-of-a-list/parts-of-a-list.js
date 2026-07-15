function partlist(str) {
   const results = [];
​
   for(let i = 0; i < str.length - 1; i++) {
      results.push([str.slice(0, i + 1).join(" "), str.slice(i + 1, str.length).join(" ")])
   }
​
   return results
}