const sequenceSum = (begin, end, step) => {
    // first increment begin with step
    // if the step got bigger than the end stop!
    let result = 0;
    for(let i = begin; i <= end; i += step) {
      result += i
    }
    return result
};