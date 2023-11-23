/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {

    //helper function 
    const shift = (letter,num) => {
        //takes the letter converts it to char code number, add the shift number ammount
        // return the new letter based on the charCode
        return  String.fromCharCode( letter.charCodeAt(0) + Number(num) )
    }

    s = s.split("")
    
    for(let i = 0; i < s.length; i++) {
        if(!isNaN(s[i])) { //number slot
            s[i] = shift(s[i - 1], s[i])
        }
    }
    return s.join('')
};