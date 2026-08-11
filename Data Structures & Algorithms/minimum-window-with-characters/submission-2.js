class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        //keep track using map or object for each character. need and window.
        // keep totalNeeded.
        // keep havetill now

        const need = {}
    const window = {}

    for (let c of t) {
        need[c] = (need[c] || 0) + 1
    }

    const totalNeeded = Object.keys(need).length
    let have = 0
    let len = Infinity
    let res = [-1, -1]

    let l = 0

    for (let r = 0; r < s.length; r++) {
        window[s[r]] = (window[s[r]] || 0) + 1

        if (need[s[r]] && window[s[r]] === need[s[r]]) {
            have++;
        }

        while (have === totalNeeded) {
           if((r-l+1)<len)
                {
                    len = r-l+1
                    res = [l,r]
                }
            window[s[l]]--;

            if (need[s[l]] && (window[s[l]] < need[s[l]])) {
                have--;
            }

            l++;

        }
    }

    return len === Infinity ? "" : s.slice(res[0], res[1]+1) 
    }
}
