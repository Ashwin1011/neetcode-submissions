class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Array(9).fill(0)
        let cols = new Array(9).fill(0)
        let squares = new Array(9).fill(0)


        for(let r = 0;r<9;r++){
            for(let c=0;c<9;c++){
                if(board[r][c] === '.') continue;
                let val = parseInt(board[r][c]) - 1; //changing value to index based 5 becomes 4
                let mask  = 1 << val

                if((rows[r] & mask) || (cols[c]&mask) || squares[Math.floor(r/3) * 3 + Math.floor(c/3)] & mask){
                    return false;
                }

                rows[r] |= mask
                cols[c] |= mask
                squares[Math.floor(r/3) * 3 + Math.floor(c/3)] |= mask;
            }
        }
        return true
    }
}
