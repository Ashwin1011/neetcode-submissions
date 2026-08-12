class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let conf = {
            ']':'[',
            '}':"{",
            ')':'('
        }

        let st = []

        for(let b of s){
            if(conf[b]){
                let top = st.pop()
                if(top !== conf[b]) return false
            }
            else{
                st.push(b)
            }
        }

        return st.length === 0
    }
}
