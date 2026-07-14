function generateHashtag(str) {
   if (!str) {
      return false
   }
​
   const hashTag = str
      .split("")
      .map((char, index) => {
         if(char === " ") {
            return ""
         }
​
         if(str[index - 1] === " " || index === 0) {
            return char.toUpperCase()
         }
         
         return char
      }).join("")
​
   if(hashTag.length === 0 || hashTag.length > 139) {
      return false
   }
​
   return "#" + hashTag
}