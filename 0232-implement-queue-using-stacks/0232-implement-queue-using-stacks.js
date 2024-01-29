
class MyQueue {
    constructor() {
        this.pushStack = []
        this.popStack = []
    }
    //methods
    push(val) {
        this.pushStack.push(val)
    }
    pop(){
        //is pop stack emtpy?
        if(!this.popStack.length){ //popStack is empty
            while(this.pushStack.length){ //dump the pushStack into the popStack
                this.popStack.push(this.pushStack.pop()) //add the top element of pushStack while removing it
            }
        }
        //above makes sure pop has elements
        //return the poped element
        return this.popStack.pop()
    }
    peek(){
        //is pop stack empty
        if(!this.popStack.length){ //popStack is empty
            while(this.pushStack.length){ //dump the pushStack into the popStack
                this.popStack.push(this.pushStack.pop()) //add the top element of pushStack while removing it
            }
        }
        //return what the last element of the popStack is
        return this.popStack[this.popStack.length - 1]
    }
    empty(){
        //boolean  are both stacks empty
        //if both are 0 will return true
        return !this.pushStack.length && !this.popStack.length
    }

}







// var MyQueue = function() {
    
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
    
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
    
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
    
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
    
// };

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */