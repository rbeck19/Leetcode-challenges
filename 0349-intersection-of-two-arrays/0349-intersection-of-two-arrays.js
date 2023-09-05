/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    // let dup = []

    // //make an array without duplicates
    // let setNums1 = [...new Set(nums1)];
    // let setNums2 = [...new Set(nums2)];
    
    // //loop through array and see each element is in the other array
    // for (let i = 0; i < setNums1.length; i++ ) {
    //     if (setNums2.includes(setNums1[i])) {
    //         dup.push(setNums1[i])
    //     }
    // }
    // console.log(dup)
    // return dup


    let set = new Set(nums1)
    let result = new Set()
    for(let i=0; i<nums2.length; i++) {
        if(set.has(nums2[i])) result.add(nums2[i])
    }
    return Array.from(result)



};