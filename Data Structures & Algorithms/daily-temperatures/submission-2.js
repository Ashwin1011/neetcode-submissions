class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let st = []
        let res = new Array(temperatures.length)
        
        for(let i=0;i<temperatures.length;i++){
            let temp = temperatures[i]
            if(st.length === 0){
                st.push([temp, i])
            }
            else if(st[st.length -1][0] >= temp){
                st.push([temp,i])
            }
            else{
                while(st.length>0 && st[st.length -1][0] < temp){
                    let top = st.pop()
                    res[top[1]] = i - top[1]
                }
                st.push([temp,i])
            }
        }

        while(st.length > 0){
            let top = st.pop()
            res[top[1]] = 0
        }

        return res
    }
}
