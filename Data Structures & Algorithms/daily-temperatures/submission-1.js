class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let length = temperatures.length
        let res = new Array(length).fill(0)
        let st = []
        let max = 0
        let pointer = 0

        for(let i=0;i<length;i++){
            let t = temperatures[i]
            while(st.length >0 && t > st[st.length-1][0]){
                const [temp,index] = st.pop()
                res[index] = i-index
            }
            
                st.push([t,i])
           
        }

        return res
    }
}
