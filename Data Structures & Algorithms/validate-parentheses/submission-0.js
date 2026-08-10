class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []

        let corres = {
            ')':'(',
            ']':'[',
            '}':'{'
        }

        for(let i=0;i<s.length;i++){
        let c = s[i]
        if(c == '(' || c == '[' || c == '{'){
            stack.push(c)
        }
        else if(c == ')' || c == ']' || c == '}'){
            let top = stack.pop()
            if(corres[c] !== top) return false
        }
    }
     return stack.length === 0
}
}
