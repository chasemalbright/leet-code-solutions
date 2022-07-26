// question url: https://leetcode.com/problems/two-sum/

// solution

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while (l < r) {
        let sum = nums[l] + nums[r]
        if (sum > target){
            r--;
        } else if (sum < target){
            l++;
        } else {
            return [l, r]
        }
    }
}