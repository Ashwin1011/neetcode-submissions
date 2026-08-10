class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minPQ = new MinPriorityQueue((x)=>x[0])

        for(const p of points){
            const length = Math.sqrt((p[0]*p[0])+p[1]*p[1])
            minPQ.enqueue([length,p])
        }
        let res = []
        while(k>0){
            res.push(minPQ.dequeue()[1])
            k--;
        }

        return res
    }
}
