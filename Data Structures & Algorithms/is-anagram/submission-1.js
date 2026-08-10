class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const slen = s.length
        const tlen = t.length

        if(slen !== tlen) return false

        const sMap = new Map()
        const tMap = new Map()

        for(const i of s){
            sMap.set(i,(sMap.get(i) || 0) + 1)
        }

        for(const i of t){
            tMap.set(i,(tMap.get(i) || 0) + 1)
        }
        
        for(const k of sMap){
            const key = k[0]
            if(sMap.get(key) !== tMap.get(key)) return false
        }

        return true
    }
}
