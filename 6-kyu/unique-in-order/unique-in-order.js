var uniqueInOrder=function(iterable){
    if(!Array.isArray(iterable)) {
      return iterable.split("").reduce((a,c) => c !== a.at(-1) ? a += c : a, '').split("")
    } else {
      return iterable.reduce((a,c) => {
        if(c !== a[a.length - 1]) a.push(c)
        return a
      }, [])
    }
}