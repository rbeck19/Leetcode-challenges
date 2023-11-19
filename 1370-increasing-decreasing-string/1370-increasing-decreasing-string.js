/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    
    //helper function to get letters forward
    //loop through the object and push to output while there is value
    //if no value delete the key
    const loopForward = (hashmap) => {
        for (const letter in hashmap) {
        //console.log(`${letter}: ${hashmap[letter]}`);
            if(hashmap[letter] > 0) {
                output.push(letter)
                hashmap[letter] -= 1
            } else {
                delete hashmap[letter]
            }

        }
    }
    //helper function to get letters backward
    //loop through foward and the reverse the order, then add that to the output
    const loopBackward = function(hashmap) {
        let addLetter = []
        for(const letter in hashmap) {
            if(hashmap[letter] > 0) {
                addLetter.push(letter)
                hashmap[letter] -= 1
            } else {
                delete hashmap[letter]
            }
        }
        addLetter = addLetter.reverse().join("")
        output.push(addLetter)
    }


    const hashmap = {}
    
    s = s.split("").sort().join("") //order the string
    //create a hashmap of letter occurances
    for (let i = 0; i < s.length; i++) {
        if(!hashmap[s[i]]) {
            hashmap[s[i]] = 1
        } else {
            hashmap[s[i]] += 1
        }
    }

let output = []

//whie the object has keys use the helper functions
while(Object.keys(hashmap).length != 0) {
    loopForward(hashmap)
    loopBackward(hashmap)
}

return output.join("")







};