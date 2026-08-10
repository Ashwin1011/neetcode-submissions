class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if(numbers.length == 2){
            return [1,2]
        }
        let lp =0 
        let rp = numbers.length-1;
        while(lp<rp){
            if(numbers[lp] + numbers[rp] > target){
                rp--;
            }
            if(numbers[lp] + numbers[rp] < target){
                lp++;
            }
            if(numbers[lp] + numbers[rp] == target){
                return [lp+1,rp+1]
            }
        }
    }
}
