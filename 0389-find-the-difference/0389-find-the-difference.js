/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
//     let strS = s.split("").sort().join("")
//     let strT = t.split("").sort().join("")

//     let min = 0
//     let max = strT.length - 1

//     //for cases of only one letter
//     if(strS.length == 1 && strS[0] == strT[0]){
//         return strT[1]
//     } else if(strS.length == 1 && strS[0] == strT[1]){
//         return strT[0]
//     }

// console.log(strS)
// console.log(strT)

//     while(min <= max){
//         console.log(strS[max-1] , strT[max])

//         //check the start
//         if(strS[min] != strT[min]) {
//             return strT[min]
//         }
//         //check the end
//         if(strS[max] == undefined) {
            
//         } else if(strS[(max)] != strT[max]){
//             return strT[max]
//         }
//         //increase the check points
//         min++
//         max--
//     }





//create a hashmap for S
const hashmapS = {}

for(let i = 0; i < s.length; i++) {
    if (!hashmapS[s[i]]) {
        hashmapS[s[i]] = 1
    } else {
        hashmapS[s[i]] += 1
    }
}

//loop through t and check hashmapS
for(let i = 0; i < t.length; i++) {
    if(!hashmapS[t[i]] || hashmapS[t[i]] == 0) {
        return t[i]
    } else {
        hashmapS[t[i]] -= 1
    }
}

};