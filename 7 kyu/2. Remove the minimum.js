function removeSmallest(numbers) {
    let result = [];
    let state = false;
    numbers.forEach(num => (Math.min(...numbers) == num && state == false) ? state = true : result.push(num));
    return result;
}