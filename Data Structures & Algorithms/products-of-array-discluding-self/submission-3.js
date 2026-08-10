class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftArr = []
        let rightArr = []

        for(let i=0;i<nums.length;i++){
            if(i === 0){
                leftArr[0] = 1
            }
            else{
                leftArr[i] = leftArr[i-1] * nums[i-1]
            }
        }

        for(let i=nums.length-1;i>=0;i--){
            if(i === nums.length-1){
                rightArr[i] = 1
            }
            else{
                rightArr[i] = rightArr[i+1] * nums[i+1]
            }
        }

        let res = []
        for(let i=0;i<nums.length;i++){
            res.push(leftArr[i]*rightArr[i])
        }

        return res
    }
}
