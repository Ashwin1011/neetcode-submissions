class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let max = 0 // max freq
        let map = new Map() // map to store the frequencies
        let maxLength = 0
        let l = 0;

        for(let r=0;r<s.length;r++){
            const char = s[r]
            map.set(char, (map.get(char)||0)+1)
            max = Math.max(max, map.get(char))

            while((r-l+1) - max > k){
                map.set(s[l],map.get(s[l]) - 1)
                l++;
            }

            maxLength = Math.max(maxLength, r-l+1)
        }

        return maxLength
    }
}
