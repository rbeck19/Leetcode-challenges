/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    // if(s.length == 1){
    //     return 1
    // }

    // const hashmap = new Map()
    // let substring = ""
    // let temp = ""

    // for (let i = 0; i < s.length; i++) {
    //     if(!hashmap[s[i]]) {
    //         hashmap[s[i]] = i
    //         temp += s[i]
    //         if(temp.length > substring.length) {
    //             substring = temp
    //         }
    //     } else {
    //         // if(temp.length > substring.length) {
    //         //     substring = temp
    //         // }
    //         //reset the checker and temp
    //         console.log(hashmap[s[i]])
    //         hashmap.clear()
    //         hashmap[s[i]] = 1
    //         temp = s[i]
    //     }
    // }
    // return substring.length


var start=0; end=0;
var maximumLen=0;
var substring=new Set();
while (end<s.length){
    if(!substring.has(s[end])){
        substring.add(s[end]);
        maximumLen=Math.max(maximumLen,substring.size);
        end++
    }
    else{
        substring.delete(s[start]);
        start++
    }
}
return maximumLen

};