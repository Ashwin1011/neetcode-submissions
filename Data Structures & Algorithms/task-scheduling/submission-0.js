class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let taskMap = {}
        for(const t of tasks){
            taskMap[t] = taskMap[t]? taskMap[t]+1:1
        }

        let maxHeap = new MaxPriorityQueue()
        const values = Object.values(taskMap)
        for(const freq of values){
            maxHeap.enqueue(freq)
        }

        let q = new Queue()
        let time = 0
        while((maxHeap.size()>0) || q.size()>0){
            time++;

            if(maxHeap.size()>0){
            let cnt = maxHeap.dequeue() - 1
            if(cnt>0){
                q.enqueue([cnt,time+n])
            }
            }

            if(q.size()>0 && q.front()[1] == time){
                maxHeap.enqueue(q.dequeue()[0]);
            }
        }

        return time
    }
}
