//FIFO
// [a,b,c,d,e,f,g,h];
// front-------back
class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(element) {
        this.queue.push(element);
    }
    size() {
        return this.queue.length;
    }
    isEmpty() {
        this.size() === 0;
    }
    dequeue() {
        if (this.isEmpty())
            return "Queue Is Empty. Underflow. Cannot Perform Dequeue Operation.";

        return this.queue.shift();
    }
    front(){
        if(this.isEmpty()) return "Queue Is Empty."
        return this.queue[0]
    }
    printQueue(){
        for(let i=0; i<this.size(); i++){
            console.log(this.queue[i]);
        }
    }
}


const queue = new Queue()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(1)
queue.printQueue()
console.log("<================================================>")
queue.dequeue()
queue.printQueue()
console.log("<================================================>")
console.log(queue.front())
