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

var goodNodes = function (root, max = -Infinity) {
  if (root === null) return 0;
  let res = 0;

  if (root.val >= max) {
    res++;
    max = root.val;
  }

  res += goodNodes(root.left, max);
  res += goodNodes(root.right, max);

  return res;
};
