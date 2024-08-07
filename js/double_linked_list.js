class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // The push method takes a value as parameter and assigns it as the tail of the list
    push(val) {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // The pop method removes the tail of the list
    pop() {
        if (!this.head) return undefined;
        const poppedNode = this.tail;

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    // The shift method removes the head of the list
    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    // The unshift method takes a value as parameter and assigns it as the head of the list
    unshift(val) {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // The get method takes an index number as parameter and returns the value of the node at that index
    get(index) {
        if (index < 0 || index >= this.length)
            return "Get Index: Index out of bounds";
        let count, current;

        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count <= index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count >= index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    // The set method takes an index number and a value as parameters,
    // and modifies the node value at the given index in the list
    set(index, val) {
        let foundNode = this.get(index);

        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // The insert method takes an index number and a value as parameters,
    // and inserts the value at the given index in the list
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        //The double exclamation mark !! is used to convert the return value of
        // this.unshift(val) to a boolean.
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) !!this.push(val);

        let newNode = new Node(val);
        let previous_node = this.get(index - 1);
        let after_node = previous_node.next;

        newNode.prev = previous_node;
        previous_node.next = newNode;
        newNode.next = after_node;
        after_node.prev = newNode;

        this.length++;
        return true;
    }

    // The remove method takes an index number as parameter
    // and removes the node at the given index in the list
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const previousNode = this.get(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    traverse() {
        let current = this.head;

        while (current.next != null) {
            console.log(current);
            current = current.next;
        }
        return "Done.";
    }
}

const DoublyLinkedListTest = new DoublyLinkedList();

DoublyLinkedListTest.push("0");
DoublyLinkedListTest.push("1");
DoublyLinkedListTest.push("2");
DoublyLinkedListTest.push("3");
DoublyLinkedListTest.push("4");
DoublyLinkedListTest.push("5");
DoublyLinkedListTest.push("6");
DoublyLinkedListTest.push("7");
DoublyLinkedListTest.push("8");
DoublyLinkedListTest.push("9");
DoublyLinkedListTest.push("10");
DoublyLinkedListTest.push("11");
// DoublyLinkedListTest.traverse();
// console.log(DoublyLinkedListTest.length);

// DoublyLinkedListTest.pop();
// DoublyLinkedListTest.shift();
// DoublyLinkedListTest.traverse();
// console.log(DoublyLinkedListTest.length);

DoublyLinkedListTest.unshift("3429");
// DoublyLinkedListTest.traverse();

console.log("Get index 5: ", DoublyLinkedListTest.get(5));
console.log("");

// DoublyLinkedListTest.set(5, "90210");
// console.log("Set index 5: ", DoublyLinkedListTest.get(5));
// console.log("");
// DoublyLinkedListTest.traverse();

DoublyLinkedListTest.insert(5, "98732");
console.log("Insert index 5: ", DoublyLinkedListTest.get(5));
console.log("");

DoublyLinkedListTest.remove(5);
console.log("Get index 5: ", DoublyLinkedListTest.get(5));
console.log("");
// DoublyLinkedListTest.traverse();