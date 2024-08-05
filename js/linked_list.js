class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined

        let current = this.head
        let newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return current
    }

    shift() {
        if (!this.head) return undefined

        let currentHead = this.head
        this.head = currentHead.next
        this.length--

        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    unshift(val) {
        const newNode = new Node(val)

        if (!this.head) {
            this.head = new Node(val)
            this.tail = this.head
        }

        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    get(index) {
        if (index < 0 || index >= this.length) return "Get Error: Index out of bounds"

        let counter = 0
        let current = this.head

        while (counter !== index) {
            current = current.next
            counter++
        }
        return current
    }

    set (index, val) {
        const foundNode = this.get(index)

        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) return "Insert Error: Index out of bounds"
        if (index === this.length) return this.shift()
        if (index === 0) return !!this.unshift(val)

        const newNode = new Node(val)
        const previous = this.get(index - 1)
        const temp = previous.next

        previous.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return "Remove Error: Index does not exist"
        if (index === 0) return this.shift()
        if (index == this.length - 1) return this.pop()

        let previousNode = this.get(index - 1)
        let removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return removed
    }

    // The reverse method reverses the list and all pointers so that
    // the head becomes the tail and the tail becomes the head
    reverse(){
        const node = this.head
        this.head = this.tail
        this.tail = node
        let next
        const prev = null
        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

    traverse() {
        let current = this.head

        while (current.next != null) {
            console.log(current);
            current = current.next
        }
        return "Done."
    }
}

const linkedListTest = new SinglyLinkedList

linkedListTest.push("0");
linkedListTest.push("1");
linkedListTest.push("2");
linkedListTest.push("3");
linkedListTest.push("4");
linkedListTest.push("5");
linkedListTest.push("6");
linkedListTest.push("7");
linkedListTest.push("8");
linkedListTest.push("9");
linkedListTest.push("10");
linkedListTest.push("11");
// linkedListTest.traverse();

linkedListTest.pop();
linkedListTest.shift();
// linkedListTest.traverse();

linkedListTest.unshift("3429");
// linkedListTest.traverse();

console.log("Get index 5: ", linkedListTest.get(5));
console.log("");

linkedListTest.set(5, "90210");
console.log("Set index 5: ", linkedListTest.get(5));
console.log("");
// linkedListTest.traverse();

linkedListTest.insert(5, "98732");
console.log("Insert index 5: ", linkedListTest.get(5));
console.log("");

linkedListTest.remove(5)
linkedListTest.traverse();