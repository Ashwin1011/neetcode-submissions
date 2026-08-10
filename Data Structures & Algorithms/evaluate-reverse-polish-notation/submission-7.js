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
                console.log(st)
            }
            else{
                let int1 = st.pop()
                let int2 = st.pop()
                if(t === '+'){
                    let int3 = int1+int2
                    console.log("add",int3)
                    st.push(int3)
                     console.log(st)
                    
                }
                else if(t === '-'){
                    let int3 = int2-int1
                    console.log("sub",int3)
                    st.push(int3)
                     console.log(st)
                }
                if(t === '*'){
                     let int3 = int2*int1
                    console.log("multi",int3)
                    st.push(int3)
                     console.log(st)
                }
                if(t === '/'){
                    console.log("int2",int2)
                    console.log("int1",int1)
                    let int3 = Math.trunc(int2/int1)
                    console.log("divide",int3)
                    st.push(Math.trunc(int2/int1))
                     console.log(st)
                }
            }
        }
        return st.pop()
    }
}
