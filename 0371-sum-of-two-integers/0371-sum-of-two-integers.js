/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {

  // Bitwise operators

  let loop = 0

  while (b !== 0) {

    let carry = a & b;
    a = a ^ b;
    b = carry << 1

    // to see the steps it takes 
    console.log(loop + ".  carry = " + carry + "  a = " + a + "  b = " + b)
    loop++
  }
  return a
};
