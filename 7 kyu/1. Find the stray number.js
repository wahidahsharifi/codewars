function stray(numbers) {
    let arr = [];
    numbers.forEach(num => {
      if (!arr.includes(num)) {
        arr.push(num);
      } else {
        arr = arr.filter(n => n !== num);
      }
    });
    return arr[0];
}