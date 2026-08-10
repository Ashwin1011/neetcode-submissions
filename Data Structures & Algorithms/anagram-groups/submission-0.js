class Solution {

     getFrequecyString(string){
        let charArr = new Array(26).fill(0);
        let stringArr = string.split('')
        for(let i =0;i<stringArr.length;i++){
             charArr[stringArr[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
        let freqS = ""
        for(let i=0;i<26;i++){
            if(charArr[i]>0){
                freqS += String.fromCharCode(97 + i) + charArr[i].toString()
            }
        }
        return freqS
    }
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let freqencyMap = new Map()

        for(let str of strs){
            let freqString = this.getFrequecyString(str)
            if(freqencyMap.has(freqString)){
               let internalArr =  freqencyMap.get(freqString)
               internalArr.push(str)
               freqencyMap.set(freqString,internalArr)
            }
            else{
                let newArr = [str]
                 freqencyMap.set(freqString,newArr)
            }
        }
        let finalArr = []
        for(let m of freqencyMap.values()){
            finalArr.push(m)
        }

        return finalArr
    }

   
}
