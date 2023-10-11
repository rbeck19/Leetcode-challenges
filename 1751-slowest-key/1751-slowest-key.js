/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    
const hashmap = {}


for (let i = 0; i < keysPressed.length; i++) {
    if(i == 0) {
        hashmap[releaseTimes[i]] = [keysPressed[i]]
    } else if (!hashmap[ releaseTimes[i] - releaseTimes[i - 1] ]){
        hashmap[releaseTimes[i] - releaseTimes[i - 1]] = [keysPressed[i]]
    } else {
        hashmap[releaseTimes[i] - releaseTimes[i - 1]].push(keysPressed[i])
    }
}

//get last key value in hashmap
let lastElement;
for (lastElement in hashmap){
    lastElement
}
   

let longest = hashmap[lastElement].sort()

return longest[longest.length-1]

};