/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    //base case if no tree
    if(!root) {
        return null
    }
    
    const queue = [root]
    //track the left most value
    let result = null

    while(queue.length > 0) {
        const levelSize = queue.length
        result = queue[0].val

        for(let i = 0; i < levelSize; i++) {
            const node = queue.shift()

            if(node.left) {
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }

    return result

};