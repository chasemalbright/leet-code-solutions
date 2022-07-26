// question url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// solution

/**
  * @param {number} prices
  * @return {number}
  */

var maxProfit = function(prices) {
    let l = 0
    let r = 1

    let max = 0

    while (r < prices.length){
        if (prices[l] < prices[r]){
            let curr = prices[r] - prices[l]
            max = Math.max(curr, max)
        } else {
            l = r
        }
        r++;
    }
    return max
}