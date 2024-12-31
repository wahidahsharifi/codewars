function findAverage(nums) {
    return nums.reduce((a,c) => a + c, 0) / nums.length;
}