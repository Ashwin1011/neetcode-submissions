class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let posSpeed = []

        for(let i=0;i<position.length;i++){
            posSpeed[i] = [position[i],speed[i]]
        }

        posSpeed.sort((a,b)=> b[0] - a[0]) //sort in desc position

        let timeArr = []
        console.log(posSpeed)
        for(let i =0;i<posSpeed.length;i++){
            timeArr[i] = (target-posSpeed[i][0])/posSpeed[i][1]
        }

        let st = []

        for(let i=0;i<timeArr.length;i++){
            if(st.length === 0){
                st.push(timeArr[i])
            }
            else if(timeArr[i]>st[st.length - 1]){
                st.push(timeArr[i])
            }
        }

    return st.length
    }
}
