class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let st = [] // [index, height]
        let max = 0

        for(let i=0; i<heights.length; i++){
            let index = i
            while(st.length && st[st.length-1][1] > heights[i]){
                let [idx, h] = st.pop()
                max = Math.max(max, h * (i-idx))
                index = idx
            }
            st.push([index,heights[i]])
        }

        while(st.length>0){
            let [idx, h] = st.pop()
            max = Math.max(max, h * (heights.length-idx))
        }

        return max

    }
}
