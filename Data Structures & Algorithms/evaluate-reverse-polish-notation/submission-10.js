class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let st = []
        for(let t of tokens){
            if(t!== '+' && t!== '-' && t !== '*' && t !== '/'){
                st.push(parseInt(t))
            }
            else{
                let int1 = st.pop()
                let int2 = st.pop()
                if(t === '+'){
                    let int3 = int1+int2
                    st.push(int3)
                    
                }
                else if(t === '-'){
                    let int3 = int2-int1
                    st.push(int3)
                }
                if(t === '*'){
                     let int3 = int2*int1
                    st.push(int3)
                }
                if(t === '/'){
                    let int3 = Math.trunc(int2/int1)
                    st.push(Math.trunc(int2/int1))
                }
            }
        }
        return st.pop()
    }
}
