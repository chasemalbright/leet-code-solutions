// question url: https://leetcode.com/problems/contains-duplicate/

// solution

/**
 * @param {number[]} nums 
 * @return {boolean}
 */

var containsDuplicate = function(nums){

    const set = new Set(nums)

    return nums.length != set.size
}