class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowMap = new Map()
        let colMap = new Map()
        let sqMap = new Map()

        for(let row =0;row<9;row++){
            for(let col = 0; col<9;col++){
                let val = board[row][col]
                if(val === '.') continue;
                if(!rowMap.has(row)){
                    rowMap.set(row, new Set())
                }
                if(rowMap.get(row).has(val)) return false
                rowMap.get(row).add(val)

                if(!colMap.has(col)){
                    colMap.set(col, new Set())
                }
                if(colMap.get(col).has(val)) return false
                colMap.get(col).add(val)

                let sq = Math.floor((row/3)) * 3 + Math.floor(col/3)

                if(!sqMap.has(sq)){
                    sqMap.set(sq, new Set())
                }
                if(sqMap.get(sq).has(val)) return false
                sqMap.get(sq).add(val)

            }
        }

        return true
    }
}
