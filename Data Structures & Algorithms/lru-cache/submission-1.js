class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map()
        this.cap = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.get(key)) return -1
        else{
             let value =  this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value);
            return value
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.cache.delete(key)
        if(this.cache.size === this.cap){
            let fk = this.cache.keys().next().value
            this.cache.delete(fk)
        }
        this.cache.set(key, value);
    }
}
