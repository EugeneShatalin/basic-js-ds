const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  treeRoot = null;

  root() {
    return this.treeRoot;
  }

  add(data) {
    const node = this.treeRoot;
    if (node === null) {
      this.treeRoot = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    let current = this.treeRoot;
    if (current.left === null || this.treeRoot === null) {
      return null;
    }
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.treeRoot;
    if (current.right === null || this.treeRoot === null) {
      return null;
    }
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
};
