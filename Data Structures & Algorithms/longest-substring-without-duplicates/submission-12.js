class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let max = 0
        let charset = new Set()

        for(let r = 0;r<s.length;r++){
            while(charset.has(s[r])){
                charset.delete(s[l])
                l++;
            }

            charset.add(s[r])
            max = Math.max(max, r-l+1)
        }

        return max
    }
}
