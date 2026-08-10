class MinStack {
    
    constructor() {
         this.minStack = []
     this.min= []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.minStack.push(val)
        val = Math.min(val,this.min.length === 0? val:this.min[this.min.length -1])
        this.min.push(val)
        return null
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop()
        this.min.pop()
        return null
    }

    /**
     * @return {number}
     */
    top() {
        return this.minStack[this.minStack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length-1]
    }
}
