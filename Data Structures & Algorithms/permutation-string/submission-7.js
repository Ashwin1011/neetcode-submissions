class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s2.length<s1.length) return false
        const counts1 = new Array(26).fill(0)
        const counts2 = new Array(26).fill(0)

        const aCode = 'a'.charCodeAt(0)

        for(let i=0;i<s1.length;i++){
            counts1[s1.charCodeAt(i) - aCode]++
            counts2[s2.charCodeAt(i) - aCode]++
        }

        let matches = 0
        for(let i=0;i<26;i++){
            if(counts1[i] === counts2[i]) matches++;
        }
        let l = 0
        for(let r=s1.length;r<s2.length;r++){
            if(matches === 26) return true;
            let rIdx = s2.charCodeAt(r) - aCode;
            counts2[rIdx]++;

            if(counts2[rIdx] === counts1[rIdx]){
                matches++;
            }
            else if(counts1[rIdx] + 1 === counts2[rIdx]){
                matches--;
            }

            let lIdx = s2.charCodeAt(l) - aCode;
            counts2[lIdx]--;

             if(counts2[lIdx] === counts1[lIdx]){
                matches++;
            }
            else if(counts2[lIdx] + 1 === counts1[lIdx]){
                 matches--;
            }

            l++;

        }

        return matches === 26;

    }
}
