var maxSubArray = function(nums) {
    let currMax = 0;
    let maxSum = nums[0]
    for (const n of nums) {
        console.log("n", n)
        currMax = Math.max(currMax, 0) + n;
        console.log("curr", currMax)
        maxSum = Math.max(maxSum, currMax)
        console.log("max", maxSum)
    }
    return maxSum;
};
let nums = [-2,1,-3, 4]

console.log("final", maxSubArray(nums))

