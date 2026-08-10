class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let newS = new Set()
        let max = 0;

        let l = 0;
        let r = 0;
        for(r= 0;r < s.length;r++){

            while(newS.has(s[r])){
                newS.delete(s[l])
                l++;
            }

            newS.add(s[r]);
            max = Math.max(max, r-l+1)
        }
        return max
    }
}
