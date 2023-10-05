/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
    let output = []
    //place holder mimic arr1
    let temp = arr1

    //loop through arr2 
    //remove the items from temp array
    //add the items to output
    for(let i = 0; i < arr2.length; i++) {
        temp = temp.filter(num => num !== arr2[i])
        output.push(...arr1.filter(num => num == arr2[i]))
    }   

    //sort the remaining numbers
    temp = temp.sort((a,b)=> a-b)
    //add them to output aray
    output.push(...temp)

    return output
};