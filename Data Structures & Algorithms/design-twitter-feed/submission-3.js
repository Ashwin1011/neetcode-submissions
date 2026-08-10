class Twitter {
    constructor() {
        this.count = 0
        this.tweetMap = new Map()
        this.followMap = new Map()
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.tweetMap.has(userId)){
            this.tweetMap.set(userId,[])
        }
        this.tweetMap.get(userId).push([this.count,tweetId]);
        this.count -= 1;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let res = []
        if(!this.followMap.has(userId)){
            this.followMap.set(userId, new Set())
        }
        this.followMap.get(userId).add(userId)

        const minHeap = new PriorityQueue((a,b) => a[0]- b[0])

        for(const followeeId of this.followMap.get(userId)){
            if(this.tweetMap.has(followeeId)){
                const tweets = this.tweetMap.get(followeeId)
                const idx = tweets.length - 1
                const [count, tweetId] = tweets[idx]
                minHeap.enqueue([count,tweetId, followeeId, idx - 1])
            }
        }

        while(res.length < 10 && !minHeap.isEmpty()){
            const [count, tId, fId, nextIdx] = minHeap.pop()
            res.push(tId)

            if(nextIdx >= 0){
                const [count, tweetId] = this.tweetMap.get(fId)[nextIdx]
                 minHeap.enqueue([count,tweetId, fId, nextIdx - 1])
            }
        }
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.followMap.has(followerId)){
            this.followMap.set(followerId, new Set())
        }
        this.followMap.get(followerId).add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followMap.has(followerId)){
             this.followMap.get(followerId).delete(followeeId)
        }
    }
}
