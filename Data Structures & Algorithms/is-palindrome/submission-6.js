class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        if(s.length <= 1 ) return true

        let fs = this.formatString(s)
        let left = 0;
        let right = fs.length -1 ;
        while(left < right){
            if(fs[left] !== fs[right]) return false
            left++;
            right--;
        }

        return true
    }

    formatString(str){
        let fs = ''
        for(let s of str){
            if((s>='a' && s<='z') ||(s>='A' && s<='Z')|| (s>='0' && s<='9') ){
                fs += s.toLowerCase();
            }
        }

        return fs
    }
}
