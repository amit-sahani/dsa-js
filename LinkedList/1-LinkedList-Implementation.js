// Applications of linked list in computer science –

// Implementation of stacks and queues
// Implementation of graphs : Adjacency list representation of graphs is most popular which is uses linked list to store adjacent vertices.
// Dynamic memory allocation : We use linked list of free blocks.
// Maintaining directory of names
// Performing arithmetic operations on long integers
// Manipulation of polynomials by storing constants in the node of linked list
// representing sparse matrices
// Applications of linked list in real world-

// Image viewer – Previous and next images are linked, hence can be accessed by next and previous button.
// Previous and next page in web browser – We can access previous and next url searched in web browser by pressing back and next button since, they are linked as linked list.
// Music Player – Songs in music player are linked to previous and next song. you can play songs either from starting or ending of the list.
// Applications of Circular Linked Lists:

// Useful for implementation of queue. Unlike this implementation, we don’t need to maintain two pointers for front and rear if we use circular linked list. We can maintain a pointer to the last inserted node and front can always be obtained as next of last.
// Circular lists are useful in applications to repeatedly go around the list. For example, when multiple applications are running on a PC, it is common for the operating system to put the running applications on a list and then to cycle through them, giving each of them a slice of time to execute, and then making them wait while the CPU is given to another application. It is convenient for the operating system to use a circular list so that when it reaches the end of the list it can cycle around to the front of the list.
// Circular Doubly Linked Lists are used for implementation of advanced data structures like Fibonacci Heap.

class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data){
        const node = new Node(data, this.head)
        this.head = node;
        this.length++
    }

    getByIndex(index){
        if(index<0 || index>=this.length) return null;
        let current = this.head
        const val=null
        for(let i=0; i<index; i++){
            current = current.next;
        }
        return current
    }

    insertAtIndex(index, val){
        if(index==0) return this.insertAtHead(val)
       if(index<=this.length){ 
           let prev = null;
            let current = this.head
            for(let i =1; i<=index; i++){
                prev = current
                current = current.next;
            }
            const node = new Node(val, current); 
            prev.next = node;
            this.length++;
        }
    }

    print(){
        let current = this.head
        let res=''
       while(current){
            res = res+current.value+'->'
           current=current.next
        }
        console.log(res,null)
    }

    removeHead(){
        this.head = this.head.next;
        this.length--;
    }

    addAtEnd(data){
        let prev = null;
        let current = this.head
        if(this.length==0){return this.insertAtHead(data)}
        for(let i =1; i<=this.length; i++){
            prev = current
            current = current.next;
        }
        const node = new Node(data, current); 
        prev.next = node;
        this.length++;
    }

    removeAtIndex(index){
        if(index==0) return this.removeHead()
       if(index<this.length){ 
           let prev = null;
            let current = this.head
            for(let i =1; i<=index; i++){
                prev = current
                current = current.next;
            }
            
            prev.next = current.next;
            this.length--;
        }
    }
}



const LL = new LinkedList();
LL.addAtEnd(10);
LL.addAtEnd(20);
LL.addAtEnd(30);
LL.insertAtHead(0);
console.log(LL.getByIndex(3))
console.log(LL.insertAtIndex(3, 50))
console.log(LL.print())
console.log(LL.removeHead())
console.log(LL.print())
LL.addAtEnd(100)
console.log(LL.print())
LL.removeAtIndex(5)
console.log(LL.print())

export default LinkedList