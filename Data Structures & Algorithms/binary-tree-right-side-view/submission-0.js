/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
         const queue = new Queue();
        let res = []

        if(!root) return res

        queue.push(root)

        while(queue.size()>0){
            let temp = []
            let size = queue.size()
            for(let i=0;i<size;i++){
            let node = queue.pop()
            temp.push(node.val)
            if(node.left){
                 queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            }
            if(temp.length>0){
                res.push(temp[temp.length-1])
            }
           

        }

        return res
    }
}
