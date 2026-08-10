class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.lenght === 0){
            return 0
        }

        let set = new Set(nums)
        let res = 0
        for(let n of set){
            let max = 0;
            if(!set.has(n-1)){//means it is the starting of the streak
                max++; 
                while(set.has(n+1)){
                    max++;
                    n++;
                }
                res = Math.max(res,max)
            }
        }
        return res
    }
}
