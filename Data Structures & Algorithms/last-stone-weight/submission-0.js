class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxPQ = new MaxPriorityQueue()
        for (const s of stones){
            maxPQ.enqueue(s)
        }
        while(maxPQ.size()>1){
            const max1 = maxPQ.dequeue()
            
            const max2 =  maxPQ.dequeue()
           
          if(max2<max1){
                maxPQ.enqueue(Math.abs(max1-max2))
            }
        }

        return maxPQ.size() === 1 ? maxPQ.dequeue() : 0;
    }
}
