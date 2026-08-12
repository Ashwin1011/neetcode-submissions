class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let st = []

        for(let t of tokens){
            if(t !== '+' && t !== '-' && t !== '/' && t !== '*'){
                st.push(parseInt(t))
            }
            else{
                let top = st.pop()
                let bottom = st.pop()
                if(t === '+'){
                    st.push(top+bottom)
                }
                else if(t === '-'){
                    st.push(bottom - top)
                }
                else if(t === '/'){
                    st.push(Math.trunc(bottom / top))
                }
                else if(t === '*'){
                    st.push(bottom * top)
                }
            }
        }
        return st[0]
    }
}
