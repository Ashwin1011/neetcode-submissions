class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = []
        let stack = []
        for(let i=0;i<position.length;i++){
            pair.push([position[i],speed[i]])
        }
        pair.sort((a,b)=>b[0]-a[0])
        for(const [p,s] of pair){
            stack.push((target-p)/s)
            if(stack.length >= 2 && (stack[stack.length -1]<=stack[stack.length -2])){
                stack.pop()
            }
        }

        return stack.length
    }
}
