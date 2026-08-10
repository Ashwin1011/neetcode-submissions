class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        let prefixArr = new Array(n)
        let suffixArr = new Array(n)
        let resArr = new Array(n)
        for(let i=0;i<n;i++){
            if(i == 0){
               prefixArr[i] = 1 
            }
            else{
               prefixArr[i] =  prefixArr[i-1] * nums[i-1]
            }
        }

        for(let i=n-1;i>=0;i--){
            if(i == n-1){
               suffixArr[i] = 1 
            }
            else{
               suffixArr[i] =  suffixArr[i+1] * nums[i+1]
            }
        }

        for(let i=0;i<n;i++){
            resArr[i] = prefixArr[i] * suffixArr[i]
        }

        return resArr
    }
}
