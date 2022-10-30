// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    var l = 0;
    var r = height.length - 1;

    var area = -1;

    while (l < r){

        area = Math.max(area,Math.min(height[l],height[r]) * (r-l));
        if (height[l]  < height[r]){
            l++;
        } else {
            r--;
        }

    }
    return area;
};