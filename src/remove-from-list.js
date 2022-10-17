const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} array
 * @param {Number} value
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(array, value) {

  let currentValue = array
  let prevValue = null

  while(currentValue) {
    if (currentValue.value === value) {
      if (!currentValue.next) {
        prevValue.next = null
        return array
      }
      if (!prevValue) {
        array = currentValue.next
        currentValue = currentValue.next
      } else {
        prevValue.next = currentValue.next
        currentValue = currentValue.next
      }
    } else if (currentValue.value !==  value) {
      prevValue = currentValue
      currentValue = currentValue.next
    }
  }
  return array
}

module.exports = {
  removeKFromList
};
