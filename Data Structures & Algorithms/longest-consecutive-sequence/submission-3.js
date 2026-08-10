class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let numSet = new Set(nums)
        let max = 0
        for(const n of numSet){
            
            if(!numSet.has(n-1)){
                let tempMax = 1;
                let tempN = n
                while(true){
                    if(numSet.has(tempN+1)){
                        tempMax += 1;
                        tempN += 1;
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
