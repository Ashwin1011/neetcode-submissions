class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],i)
        }

        for(let i=0;i<nums.length;i++){
            let compliment = target - nums[i]

            if(map.has(compliment) && map.get(compliment) !== i){
                return [i, map.get(compliment)]
            }
        }
    }
}
