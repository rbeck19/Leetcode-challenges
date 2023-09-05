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
    // //loop through the smallest array length

    // if (setNums1.length <= setNums2.length) {
    //     for (let i = 0; i < setNums1.length; i++ ) {
    //         if (setNums2.includes(setNums1[i])) {
    //             dup.push(setNums1[i])
    //         }
    //     }
    // } else {
    //     for (let i = 0; i < setNums2.length; i++ ) {
    //         if (setNums1.includes(setNums2[i])) {
    //             dup.push(setNums2[i])
    //         }
    //     }
    // }

    // return dup




    let dup = []

   if (nums1.length <= nums2.length) {
        for (let i = 0; i < nums1.length; i++ ) {
            if (nums2.includes(nums1[i])) {
                dup.push(nums1[i])
            }
        }
    } else {
        for (let i = 0; i < nums2.length; i++ ) {
            if (nums1.includes(nums2[i])) {
                dup.push(nums2[i])
            }
        }
    }

    let varDup = [...new Set(dup)]

    return (varDup)

};

