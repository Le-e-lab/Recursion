// Node class/factory function
class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

// LinkedList class/factory function
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0; // Keep track of the number of nodes
  }

  /**
   * Adds a new node containing value to the end of the list
   * @param value - The value to add to the list
   */
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * Adds a new node containing value to the start of the list
   * @param value - The value to add to the list
   */
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /**
   * Returns the total number of nodes in the list
   * @returns {number} The number of nodes in the list
   */
  get size() {
    return this.length;
  }
  /**
   * Returns the total number of nodes in the list
   * @returns {number} The number of nodes in the list
   */
  size() {
    return this.length;
  }

  /**
   * Returns the first node in the list
   * @returns {Node | null} The first node in the list, or null if the list is empty
   */
  getHead() {
    return this.head;
  }
  head() {
    return this.head;
  }

  /**
   * Returns the last node in the list
   * @returns {Node | null} The last node in the list, or null if the list is empty
   */
  getTail() {
    return this.tail;
  }
  tail() {
    return this.tail;
  }

  /**
   * Returns the node at the given index
   * @param {number} index - The index of the node to retrieve (starting from 0)
   * @returns {Node | null} The node at the given index, or null if the index is out of bounds
   */
  at(index) {
    if (index < 0 || index >= this.length) {
      return null; // Handle out-of-bounds
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  /**
   * Removes the last element from the list
   * @returns {Node | null} The removed node, or null if the list is empty
   */
  pop() {
    if (!this.head) {
      return null; // Nothing to pop
    }

    if (this.head === this.tail) {
      // Only one node in the list
      const poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return poppedNode;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    // currentNode is now the last node
    const poppedNode = currentNode;
    previousNode.nextNode = null; // Remove the last node
    this.tail = previousNode;
    this.length--;
    return poppedNode;
  }

  /**
   * Returns true if the passed in value is in the list and otherwise returns false.
   * @param value - The value to search for
   * @returns {boolean} True if the value is in the list, false otherwise
   */
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  /**
   * Returns the index of the node containing value, or null if not found.
   * @param value - The value to search for
   * @returns {number | null} The index of the node containing the value, or null if not found
   */
  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  /**
   * Represents your LinkedList objects as strings, so you can print them out and preview them in the console.
   * The format should be: ( value ) -> ( value ) -> ( value ) -> null
   * @returns {string} A string representation of the linked list
   */
  toString() {
    if (!this.head) {
      return "null";
    }

    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    result += "null";
    return result;
  }

  /**
   * Inserts a new node with the provided value at the given index.
   * @param value - The value to insert
   * @param {number} index - The index at which to insert the new node
   */
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      console.log("Index out of bounds");
      return; // Handle out-of-bounds
    }

    const newNode = new Node(value);

    if (index === 0) {
      this.prepend(value); // Reuse prepend for efficiency
      return;
    }

    if (index === this.length) {
      this.append(value); // Reuse append for efficiency
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    newNode.nextNode = currentNode;
    previousNode.nextNode = newNode;
    this.length++;
  }

  /**
   * Removes the node at the given index.
   * @param {number} index - The index of the node to remove
   * @returns {Node | null} The removed node, or null if the index is out of bounds
   */
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      console.log("Index out of bounds");
      return null; // Handle out-of-bounds
    }

    if (!this.head) {
      return null; // Empty list
    }

    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.nextNode;
      this.length--;
      if (this.length === 0) {
        this.tail = null; // Handle case where list becomes empty
      }
      return removedNode;
    }

    let currentNode = this.head;
    let previousNode = null;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    // currentNode is the node to be removed
    const removedNode = currentNode;
    previousNode.nextNode = currentNode.nextNode; // Skip over the removed node
    this.length--;

    if (index === this.length) {
      this.tail = previousNode; // Update tail if the last node is removed
    }
    return removedNode;
  }
}

// Test the LinkedList (main.js content)
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

console.log("Size:", list.size());
console.log("Head:", list.getHead().value);
console.log("Tail:", list.getTail().value);
console.log("At index 2:", list.at(2).value);
console.log("Contains 'cat':", list.contains("cat"));
console.log("Contains 'fish':", list.contains("fish"));
console.log("Index of 'hamster':", list.find("hamster"));
console.log("Index of 'fish':", list.find("fish"));

list.pop();
console.log("After pop:", list.toString());
console.log("Size after pop:", list.size());

list.prepend("ant");
console.log("After prepend:", list.toString());
console.log("Size after prepend:", list.size());

list.insertAt("bee", 2);
console.log("After insertAt:", list.toString());
console.log("Size after insertAt:", list.size());

list.removeAt(3);
console.log("After removeAt:", list.toString());
console.log("Size after removeAt:", list.size());
