/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    //returns true is string is unique
    const isUnique = (s) => new Set(s).size === s.length;

    const backtrack = (start, path) => {
        if (isUnique(path)) {
            maxLength = Math.max(maxLength, path.length);
        }
        for (let i = start; i < arr.length; i++) {
            backtrack(i + 1, path + arr[i])
        }
    }
    let maxLength = 0;
    //call function with starting posistion at 0 and starting empty string ""
    backtrack(0, "");
    return maxLength;




};