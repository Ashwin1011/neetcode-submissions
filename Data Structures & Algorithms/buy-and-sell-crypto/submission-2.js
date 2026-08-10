class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l =0;
        let r = 1;
        let max = 0;
        while(l<=r && r < prices.length){
            if(prices[r]< prices[l]){
                l = r;
                r++;
            }

            else{
                max= Math.max(max, prices[r]- prices[l])
                r++;
            }
        }

        return max
    }
}
