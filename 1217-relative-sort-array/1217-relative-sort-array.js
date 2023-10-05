/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    

    // sort the array arr1 in ascending order using sort()
    let sortArr = arr1.sort((a, b) => a - b);

    // initialize empty array result
    let result = [];

    // loop through every element of array arr2
    for (let num of arr2) {

        // find the first index of num in array sortArr using indexOf()
        let firstIndex = sortArr.indexOf(num);

        // find the last index of num in array sortArr using lastIndexOf()
        let lastIndex = sortArr.lastIndexOf(num);

        // remove the number according to firstIndex and lastIndex from sortArr using splice()
        let copyArr = sortArr.splice(firstIndex, lastIndex - firstIndex + 1);

        // push the all number of copyArr in result
        result.push(...copyArr);
    }

    // push the all remaining number of copyArr in result
    result.push(...sortArr)

    // return the array result
    return result



};