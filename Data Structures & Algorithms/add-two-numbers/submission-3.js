/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0
        let num = ''
        while(l1 !== null || l2 !== null){
            let l1Val = 0
            let l2Val = 0
            if(l1) l1Val = l1.val
            if(l2) l2Val = l2.val
            const sum = l1Val + l2Val + carry
            carry=0
            if(sum>9){
                carry = Math.trunc(sum/10)
                num = (sum%10).toString() + num 
            }
            else{
                num = sum+num
            }
            if(l1) l1 = l1.next
            if(l2)l2 = l2.next
        }

        if(carry){
            num = '1'+num
        }

        
        let dummy = {val:0,next:null}
        let cur = dummy
        for(let i = num.length-1;i>=0;i--){
            cur.next = new ListNode(num[i])
            cur = cur.next
        }
        return dummy.next
    }
}
