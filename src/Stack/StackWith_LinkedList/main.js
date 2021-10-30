class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        var newNode = new Node(value);

        if (this.length == 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        this.length++;

        return this;
    }
    pop() {
        if (this.length !== 0) {
            var response = this.top;
            this.top = this.top.next;
            this.length--;
            
            return response;
        }
        return this
    }
    //isEmpty
}

const myStack = new Stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)

console.log(myStack.pop())
console.log(myStack)



  //Discord
  //Udemy
  //google