function isValidWalk(walk) {
    const arr = [0, 0, 0, 0];
    walk.forEach(step => {
      step == 'n' ? arr[0] += 1 : step == 's' ? arr[1] += 1 : step == 'w' ? arr[2] += 1 : arr[3] += 1
    })
    const length = arr.reduce((a,c) => a + c);
    return arr[0] == arr[1] && arr[2] == arr[3] && length <= 10 && length > 2;
}