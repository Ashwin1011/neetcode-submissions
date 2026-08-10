class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1 = new Map()
        let map2 = new Map()
        let n = s.length
        let m = t.length
        if(n!==m) return false
        for(let i=0;i<n;i++){
            if(map1.has(s[i])){
                map1.set(s[i], map1.get(s[i])+1)
            }
            else{
                map1.set(s[i], 1)
            }
        }
        for(let j=0;j<m;j++){
            if(map2.has(t[j])){
                map2.set(t[j], map2.get(t[j])+1)
            }
            else{
                map2.set(t[j], 1)
            }
        }

        for(let char of map1.keys()){
            console.log(char)
            if(map1.get(char) !== map2.get(char)){
                return false
            }
        }

        return true


    }
}
