class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let max = 0;

        for(let n of nums){
            if(!set.has(n-1)){
                let tempMax = 1;

                while(set.has(n+1)){
                    tempMax++;
                    n++;
                }

                max = Math.max(max,tempMax)
            }
        }

        return max
    }
}
