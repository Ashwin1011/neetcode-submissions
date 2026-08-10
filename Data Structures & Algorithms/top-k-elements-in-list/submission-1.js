class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hMap = new Map()
        const heap = new PriorityQueue((a,b)=>b[1] - a[1])
        for(const n of nums){
            hMap.set(n, (hMap.get(n) || 0) + 1)
        }
        
        for(const k of hMap){
            heap.enqueue(k)
        }
        let res = []
        for(let i=0;i<k;i++){
            res.push(heap.dequeue()[0])
        }

        return res

    }
}
