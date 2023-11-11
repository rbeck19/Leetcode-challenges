/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    //nested loop
    for(let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse() // reverse the order
        for(let j = 0; j < image[i].length; j++) {
            //change 0 to 1 and 1 to 0
            if(image[i][j] === 0) {
                image[i][j] = 1
            } else {
                image[i][j] = 0
            }
        }
    }

    return image
};