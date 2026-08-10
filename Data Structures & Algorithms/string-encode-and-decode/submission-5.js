class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString=''
        //sanity check for empty arrays
        if(strs.length === 0){
            return ''
        }
        for(let str of strs){
            encodedString += str.length.toString() + '#' + str
        }
        console.log(encodedString)
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let res =[]
        let i =0;

        while(i < str.length){
            let j =i;
            while(str[j] !== '#'){
                j++;
            }
            let length = parseInt(str.substring(i,j));
            i=j+1;
            j = i+length;
            res.push(str.substring(i,j));
            i=j;
        }

        return res
        
    }
}
