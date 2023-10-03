/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {


//test case if x is 1 return 1
if(x == 1) {
    return x
}

if((x/2) * (x/2) == x) {
    return x/2
}
for (let i = 1; i <= x/2; i++) {
    if(i * i < x && (i+1)*(i+1) > x) {
        return i
    } else if ( i * i == x) {
        return i
    }
}


//    let left = 0, right = x
//      while(right >= left){
//          let mid= left + Math.floor((right-left)/2)
//          if(midmid> x){
//              right = mid -1
//          } else if (midmid<x){
//              if ((mid+1)(mid+1)>x){
//                  return mid
//              }
//              left = mid +1
//          } else if (midmid === x){
//              return mid
//          }
//      } 
//      return mid 

};