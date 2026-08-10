class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxWater = 0
        const left = new Array(height.length)
        const right = new Array(height.length)
        let currLeftMax = 0
        let currRightMax = 0
        for(let i = 0;i<height.length;i++){
            left[i] = currLeftMax
            currLeftMax = Math.max(currLeftMax, height[i])
        }

        for(let i = height.length - 1;i>=0;i--){
            right[i] = currRightMax
            currRightMax = Math.max(currRightMax, height[i])
        }


        for(let i=0;i<height.length;i++){
            if(left[i] === 0 || right[i] === 0) continue;

            let water = Math.min(left[i],right[i]) - height[i]

            if(water>0) maxWater += water
        }

        return maxWater;
    }
}
