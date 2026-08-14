class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length
        let COLS = matrix[0].length

        let top = 0;
        let bottom = ROWS - 1

        while(top<=bottom){
            let mid = Math.floor((top+bottom)/2)

            if(target > matrix[mid][COLS-1]){
                top = mid + 1
            }
            else if(target < matrix[mid][0]){
            bottom = mid - 1
            }
            else{
                 break;
            }
        }

        if(!(top<=bottom)) return false

        let mid = Math.floor((top+bottom)/2)

        let l = 0;
        let r = COLS -1

        while(l<=r){
            let m = Math.floor((l+r)/2)

            
            if(target > matrix[mid][m]){
                l = m + 1
            }
            else if(target < matrix[mid][m]){
                r = m -1
            }
            else{
                return true
            }
        }
        return false
    }
}
