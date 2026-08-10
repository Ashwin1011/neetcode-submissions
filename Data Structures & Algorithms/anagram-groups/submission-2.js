class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hMap = new Map()
        for(const str of strs){
            let sortedStr = this.sortString(str)
            if(!hMap.has(sortedStr)){
                hMap.set(sortedStr,[])
            }
            hMap.get(sortedStr).push(str)

        }

        let res = []

        for(const arr of hMap.keys()){
            res.push(hMap.get(arr))
        }

        return res
    }

    sortString(str){
        const tempArr = new Array(26).fill(0)
        for(const s of str){
           tempArr[s.charCodeAt(0)-97]++
        }

        let sortedString = ''
        for(let i=0;i<26;i++){
            if(tempArr[i]>0){
                sortedString += String.fromCharCode(97+i) + tempArr[i].toString()
            }
        }
        return sortedString;
    }
}
