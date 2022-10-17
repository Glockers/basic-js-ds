const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootData = null;
  }

  root = () => {
    return this.rootData;
  }

  add(data) {
    this.rootData = addData(this.rootData, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        node.right = addData(node.right, data);
      } else {
        node.left = addData(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return hasData(this.rootData, data);

    function hasData(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? hasData(node.left, data)
        : hasData(node.right, data);
    }
  }
  find(data) {
    let currentNode = this.rootData;
    while (currentNode.data !== data) {
      if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
      if (!currentNode) {
        return null;
      }
    }
    return currentNode;
  }

  remove(data) {
    this.rootData = removeValue(this.rootData, data);

    function removeValue(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeValue(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeValue(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }
        // console.log(node.right)
        if (!node.left) {
          node = node.right;
          return node;
        }

       

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeValue(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootData) {
      return;
    }

    let node = this.rootData;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootData) {
      return;
    }

    let node = this.rootData;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};