/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
    let output = []

    
    let temp = arr1

    for(let i = 0; i < arr2.length; i++) {
        temp = temp.filter(num => num !== arr2[i])
        output.push(...arr1.filter(num => num == arr2[i]))
    }

    output.push(...temp.sort((a,b)=> a-b))

    return output

};