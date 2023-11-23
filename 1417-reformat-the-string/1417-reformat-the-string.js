/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const letter = []
    const number =[]
    let awnser = []
    
    //map the string s and place the number or letter in a storage array
    s.split("").map((element) => {
        if(isNaN(element)) { //letter
            letter.push(element)
        } else { //number
            number.push(element)
        }
                   
    })

    
    if(Math.abs(letter.length - number.length) > 1) { //not possible to make string
        return ""
    } else if(letter.length > number.length) { //letter has more 
        for( let i = 0; i < letter.length; i++) {
            awnser.push(letter[i])
            if(i != letter.length -1) {
                awnser.push(number[i])
            }
        }
    } else if (number.length >letter.length) { //number has more
        for( let i = 0; i < number.length; i++) {
            awnser.push(number[i])
            if(i != number.length -1) {
                awnser.push(letter[i])
            }
        }
    } else { //even amount letter and number
            for(let i = 0; i < letter.length; i++) {
                awnser.push(letter[i])
                awnser.push(number[i])
            }
    }
    
    return(awnser.join("")) 
    
};