// question url: https://leetcode.com/problems/maximum-subarray/

// solution

/**
 * @param {number[]} nums 
 * @return {number}
 */

var maxSubArray = function(nums) {
    
    let sum = nums[0]

    let max = 0

    nums.forEach(n => {
        if (sum < 0){
            sum = 0
        }
        sum += n

        max = Math.max(sum,max)
    })

    return max


}