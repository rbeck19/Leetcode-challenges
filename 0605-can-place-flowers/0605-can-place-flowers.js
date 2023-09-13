/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

  let availableSpots = 0
  for(let i = 0; i < flowerbed.length; i++) {
    //skip if there is already a flower
    if(flowerbed[i] == 1) {
      continue
    }
    //check if the space before and after are available 
    //if available place 1 in the spot to be used a place holder 
    if( ( flowerbed[i - 1] == undefined || flowerbed[i - 1] == 0 ) && ( flowerbed[i + 1] == undefined || flowerbed[i + 1] == 0 ) ) {
      console.log("i= " + i)
      flowerbed[i] = 1
      availableSpots++
    }
  }
  return n <= availableSpots

};