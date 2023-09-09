/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //convert num into string
  //split string into array of seperate elements
  //reverse the order of the array
  //join array for a reversed order string
  //let reverseString = x.toString().split("").reverse().join("");

  //compare string version of given num to reversed string
  //return x.toString() === reverseString;

  //above operation in one line
  //return x.toString() === x.toString().split("").reverse().join("")


    //do operation using a loop to compare the first to the last and move inward

    let str = x.toString();

    let i= 0;
    let j= str.length -1;

    while(i<j){
        console.log(str[i] + "     " + str[j])
        if(str[i] !== str[j]) {
            return false
        }
        i++
        j--
    }

    return true



};
