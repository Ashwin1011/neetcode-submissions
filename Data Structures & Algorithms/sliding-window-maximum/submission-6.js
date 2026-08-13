class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let pq = new MaxPriorityQueue((x)=>x[0])
        let res = []
        for(let i=0;i<nums.length;i++){
            pq.enqueue([nums[i],i]);

            if(i>=k-1){
                while(pq.front()[1] <= i-k){
                    pq.dequeue();
                }
                res.push(pq.front()[0])
            }
        }

        return res
    }
}
