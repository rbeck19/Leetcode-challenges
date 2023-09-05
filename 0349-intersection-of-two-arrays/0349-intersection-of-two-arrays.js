/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    let dup = []

    let setNums1 = [...new Set(nums1)];
    let setNums2 = [...new Set(nums2)];
    
    
    for (let i = 0; i < setNums1.length; i++ ) {
        if (setNums2.includes(setNums1[i])) {
            dup.push(setNums1[i])
        }
    }
    console.log(dup)
    return dup
};