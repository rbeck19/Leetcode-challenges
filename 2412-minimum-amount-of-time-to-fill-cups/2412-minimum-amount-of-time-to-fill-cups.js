/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {

    count = 0

    while(true) {
        //sort the array in decening order
        amount.sort((a,b)=> b-a)    
        //IF amount[0] and amount[1] have value take away 1 from both and add count
        //ELSE IF amount[0] has value and amount[1] no longer does. remove 1 and add count
        //ELSE all amount are 0, end the loop
        if(amount[0] > 0 && amount[1] > 0) {
            amount[0]--
            amount[1]--
            count++
        } else if(amount[0] > 0) {
            amount[0]--
            count++
        } else {
            break
        }
    }

    return count

};

