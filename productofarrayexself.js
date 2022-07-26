// question url: https://leetcode.com/problems/product-of-array-except-self/

// solution

/**
 * @param {number[]} nums 
 * @return {number[]}
 */

var productExceptSelf = function(nums){

    let arr = new Array(nums.length).fill(1)

    let prefix = 1

    for (let i = 0; i < nums.length; i ++){
        arr[i] = prefix
        prefix *= nums[i]
    }
    
    let postfix = 1
    for (let i = nums.length -1; i >= 0; i--) {
        arr[i] *= postfix
        postfix *= nums[i]
    }
    
    return arr

}