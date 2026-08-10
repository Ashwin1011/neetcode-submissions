class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mapObj = {}

        //create an object with mapping of numbers and their frequency
        for(const num of nums){
            mapObj[num] = (mapObj[num] || 0) + 1
        }

        let heap = new MinPriorityQueue((x) => x[1])

        for(const [num,freq] of Object.entries(mapObj)){
            heap.enqueue([num,freq])
            if(heap.size() > k){
                heap.dequeue()
            }
        }

        let res = []

        for(let i=0;i<k;i++){
            const [num,freq] = heap.dequeue()
            res.push(num)
        }

        return res
    }
}
