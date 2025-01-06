function deleteNth(arr, n) {
    return arr.reduce((a,c) => {
      if(a.filter(e => e === c).length < n) {
        a.push(c)
      }
      return a
    }, [])
}