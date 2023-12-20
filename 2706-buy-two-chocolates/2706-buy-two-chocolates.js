/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    
    //sort in increasing order
    prices = prices.sort((a,b)=> a-b)    
    
    //IF the two smllest prices is less than or equal to money return the left over money
    //ELSE you cant but 2 with the money, return money
    if(prices[0]+prices[1] <= money) {
        return Math.abs( (prices[0]+prices[1]) - money )
    }   else {
        return money
    }
    
    
    
};