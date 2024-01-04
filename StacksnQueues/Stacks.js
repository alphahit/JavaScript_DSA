//FILO
class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack Is Empty. Can't perform pop.";
        }
        this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack Is Empty. Can't perform peek.";
        }

        return this.stack[this.size() - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.stack.length;
    }
    printStack() {
        for(let i = 0; i < this.size(); i++) {
            console.log(this.stack[i]);
        }
    }
}


const stack = new Stack();

stack.push(2)
stack.push(3)
stack.push(1)
stack.push(7)

//stack.pop()
//console.log(stack.peek())
//console.log(stack.size())
//stack.printStack()

