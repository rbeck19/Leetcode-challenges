/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    
    let count = 0
    let sub = "0" //track the substring

    for(let i = 0; i < num.length; i++) {
        if(num[i] === num[i+1]) { //compare current and next
            count += 1 //they match increase count
        } else {
            count = 0 //no match reset count
        }
        if(count === 2) { //if count = 2 then we have a match of 3
            //if sub number is less then number  sub = num
            //if sub length is 1, thus this is the first match of 3  sub = num
            //else keep sub 
            sub = Number(sub) < Number(num[i].repeat(3)) || sub.length === 1 ? num[i].repeat(3) : sub
        }
    }
    return sub.length === 1 ? "" : sub  //if length is 1, we have no substrings. return "" otherwise return sub
};