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
 * @return {string}
 */
var tree2str = function(root) {
    
    const res = []

    const preorder = (root) => { 
        if (!root) { //no root get out
            return
        }
        res.push("(") //start
        
        res.push(root.val.toString()) //add the root value

        if(!root.left && root.right) { //if empty left root with a right root, make left root have value of "()"
            res.push("()")
        }

        preorder(root.left)  //recursion 
        preorder(root.right) //recursion 

        res.push(")") //end
    }

    preorder(root) // call function
    return res.join("").slice(1,-1) // return string value wihtout "()" at begining and end
};