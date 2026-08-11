class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length) return false
        if(s1 === "" || s2 === "") return false
        let l = 0;

        for(let r = s1.length; r < s2.length+1;r++){
             let substr 
            if(r<=s2.length){
                substr = s2.substring(l, r)
            }
            else{
                substr = s2.substring(l)
            }
            let s1Arr = s1.split('')
            s1Arr = s1Arr.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0))
            let s2Arr = substr.split('')
            s2Arr = s2Arr.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0))

            if(s1Arr.join('') === s2Arr.join('')) return true
            else{
                l++;
            }
            
        }

        return false
    }
}
