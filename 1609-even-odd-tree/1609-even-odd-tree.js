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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if (!root) {
        return true;
    }
    let tree = [root];
    let level = 0;
    while (tree.length > 0) {
        let size = tree.length;
        let prevVal = (level % 2 === 0) ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < size; i++) {
            let node = tree.shift();

            if ((level % 2 === 0 && (node.val % 2 === 0 || node.val <= prevVal)) ||
                (level % 2 === 1 && (node.val % 2 === 1 || node.val >= prevVal))) {
                return false;
            }
            prevVal = node.val;
            if (node.left) {
                tree.push(node.left);
            }
            if (node.right) {
                tree.push(node.right);
            }
        }
        level++;
    }
    return true;
};