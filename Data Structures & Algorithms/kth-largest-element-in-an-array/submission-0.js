class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minPQ = new MinPriorityQueue();

        for(const n of nums){
            minPQ.enqueue(n)
        }
        let n = nums.length - k
        while(n>0){
            minPQ.dequeue()
            n--;
        }

        return minPQ.dequeue()
    }
}
