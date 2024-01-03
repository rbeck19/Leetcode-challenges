/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    
    const letters = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25,
    }

    const seenBefore = {}

    for(let i = 0; i < s.length; i++) {
        if(seenBefore[s[i]] === 0) { //skip this letter was seen already
            continue
        }

        //to save space, not making it a variable
        //let dis = letters[s[i]] //coresponding distance placement 'a' -> 0
        
        //check if distance is correct
        if( s[i] === s[i + distance[letters[s[i]]] + 1]) {
            seenBefore[s[i]] = 0 //track the letter 
        } else {
            return false //spaceing is wrong return false
        }
    }

//loop completed thus all spacing is correct
return true

};