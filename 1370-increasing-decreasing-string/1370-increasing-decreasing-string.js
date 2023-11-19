/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    

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

    s = s.split("").sort().join("")

    for (let i = 0; i < s.length; i++) {
        if(!hashmap[s[i]]) {
            hashmap[s[i]] = 1
        } else {
            hashmap[s[i]] += 1
        }
    }

let output = []


while(Object.keys(hashmap).length != 0) {
    loopForward(hashmap)
    loopBackward(hashmap)
}

return output.join("")







};