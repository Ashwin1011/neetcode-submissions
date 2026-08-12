class MinStack {
    constructor() {
        this.min = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.minStack.push(val);
        let nval = Math.min(val,this.min.length === 0?val:this.min[this.min.length-1]);
        this.min.push(nval);
        return null
    }

    /**
     * @return {void}
     */
    pop() {
        this.min.pop()
        this.minStack.pop()
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
