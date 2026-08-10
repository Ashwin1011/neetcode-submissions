class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length == 0) return 0;
        let n = height.length

        let prefix = new Array(n).fill(0)
        let suffix = new Array(n).fill(0)
        for(let i=0;i<n;i++){
            if(i == 0) prefix[0] = height[0]
            else{
                prefix[i] = Math.max(prefix[i-1], height[i])
            }
        }
        console.log(prefix)
        for(let i = n-1;i>=0;i--){
            if(i == (n-1)) suffix[i] = height[i]
            else{
                suffix[i] = Math.max(height[i],suffix[i+1])
            }
        }
console.log(suffix)
        let max = 0
        for(let i=0;i<n;i++){
            max += Math.min(prefix[i], suffix[i])- height[i]
        }
        return max
    }
}
