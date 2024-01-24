/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || i === 0) {//opening or first run push
            stack.push(s[i])
        } else if (s[i] === ')') {//closing 
            if (stack[stack.length - 1] === '(') {//if last element in stack is opening 
                stack.pop();//its a match remove from stack
            } else { // otherwise push the closing
                stack.push(s[i])
            }
        }
    }
    return stack.length;
};