class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length
        if(n == 1) return 0
        let i=0;
        let j=1;
        let maxP = 0
        while((i<j) && (i<n) && (j<n)){
            if(prices[i] >= prices[j]){
                i = j
                j++
            }
            else if(prices[j]>prices[i]){
                maxP = Math.max(maxP,(prices[j]-prices[i]))
                j++
            }
        }

        return maxP
    }
}
