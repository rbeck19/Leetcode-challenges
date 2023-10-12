/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {

    length = mountainArr.length()

    //find peak function
    function findPeak(mountainArr) {
        let low = 0
        let high = length - 1
        while(low < high) {
            let mid = Math.floor( (low + high) / 2 )
            if(mountainArr.get(mid) > mountainArr.get(mid+1)) {
                high = mid
            } else {
                low = mid + 1
            }
        }
        return low //returns Peak index
    }

    function searchBefore(mountainArr, target, low, high) {
        while(low <= high) {
            let mid = Math.floor( (low + high) / 2 )
            let mArr = mountainArr.get(mid)
            if(mArr === target) {
                return mid 
            } else if(mArr < target) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
        //if above loop does not find target
        return -1
    }

    //search after the peak
    function searchAfter (mountainArr, target, low, high) {
        while(low <= high) {
            let mid = Math.floor( (low + high) / 2 )
            let mArr = mountainArr.get(mid)
            if(mArr === target) {
                return mid
            } else if(mArr < target) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        //if loop doesnt find target return -1
        return -1
    }

    let peak = findPeak(mountainArr)
    let beforePeak = searchBefore(mountainArr, target, 0, peak)

    //if the target is before the peak safe the time dont check the after
    if(beforePeak != -1) {
        return beforePeak
    }

    let afterPeak = searchAfter(mountainArr, target, peak + 1, length -1)

    if(beforePeak == -1 && afterPeak != -1) {
        return afterPeak
    }

    if(beforePeak == -1 && afterPeak == -1) {
        return -1
    }

};