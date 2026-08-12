class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let countT = {}
        let countS = {}

        for(let c of t){
            countT[c] = (countT[c] || 0) + 1
        }

        let len = Infinity
        let res = [-1,-1]
        let need = Object.keys(countT).length

        let l = 0
        let have = 0
        for(let r= 0;r<s.length;r++){
            countS[s[r]] = (countS[s[r]] || 0) + 1
            if(countT[s[r]] && countT[s[r]] === countS[s[r]]) have++;
            while(have === need){
                if(r-l+1 < len){
                len = r-l+1
                res = [l, r]
            }

            countS[s[l]]--;
            if (countT[s[l]] && countT[s[l]] > countS[s[l]]) have--;
            l++;

            }
        }

        return len === Infinity? "": s.slice(res[0], res[1]+1)
    }
}
