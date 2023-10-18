/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    
    //length check
    if(password.length < 8) {
        console.log("LENGTH")
        return false
    }
    //lowercase check
    let lower = /[a-z]/;
    if(!lower.test(password)){
        console.log("lower")
        return false
    }
    //uppercase check
    let upper = /[A-Z]/;
    if(!upper.test(password)){
        console.log("upper")
        return false
    }
    //digit check
    let digit =  /[0-9]/;
    if(!digit.test(password)){
        console.log("digit")
        return false
    }
    //special check
    let special = /[!@#$%^&*()--+]/
    if(!special.test(password)){
        console.log("special")
        return false
    }
    //double check
    for(let i = 0; i < password.length - 1; i++) {
        if(password[i] === password[i+1]) {
            console.log("double")
            return false
        }
    }

    return true
};