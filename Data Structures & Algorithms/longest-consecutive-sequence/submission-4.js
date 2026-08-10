class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let numSet = new Set(nums)
        let max = 0
        for(let n of numSet){
            
            if(!numSet.has(n-1)){
                let tempMax = 1;
                while(true){
                    if(numSet.has(n+1)){
                        tempMax += 1;
                        n += 1;
                    }
                    else{
                        break;
                    }
                }

                max = Math.max(max, tempMax)
            }
        }

        return max
    }
}
