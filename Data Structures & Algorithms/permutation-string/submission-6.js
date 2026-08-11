class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s2.length< s1.length) return false
        let s1Arr = new Array(26).fill(0);
        let s2Arr = new Array(26).fill(0);
        let aCode = "a".charCodeAt(0); //97

        for (let i = 0; i < s1.length; i++) {
            s1Arr[s1[i].charCodeAt(0) - aCode]++;
            s2Arr[s2[i].charCodeAt(0) - aCode]++;
        }

        let matches = 0;

        for(let i=0;i<26;i++){
            if(s1Arr[i] === s2Arr[i]){
                matches++;
            }
        }

        let l = 0
        for (let r = s1.length; r < s2.length; r++) {
        if (matches === 26) return true;
        let index = s2.charCodeAt(r) - aCode;
        s2Arr[index]++;

        if (s2Arr[index] === s1Arr[index]) {
            matches++
        }
        else if (s2Arr[index] ===  s1Arr[index] + 1) {
            matches--;
        }

        index = s2.charCodeAt(l) - aCode;
        s2Arr[index]--;
        if (s2Arr[index] === s1Arr[index]) {
            matches++;
        }
        else if (s1Arr[index] === s2Arr[index]+ 1) {
            matches--;
        }
        l++;

        }

        return (matches === 26);

    }
}
