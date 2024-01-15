class Node {
    constructor(data){
        this.previous = null
        this.data = data
        this.next = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    add(data){
        const node = new Node(data)
        if(!this.head){
            this.head = node
            this.tail = node

            return;
        }else{
            node.previous = this.tail
            this.tail.next = node
            this.tail = node
        }
    }

    toString(){
        let output = "Head => "
        let current = this.head
        while(current){
            output = output + current.data + (current.next !==null ? " <==> ":'')
            current = current.next
        }
        output = output + " <= Tail"
        return output
    }

    insertAtIndex(data, index){
        let count = 0
        let current = this.head
        const node = new Node(data)
        if(index === 0){
            const nextNode = this.head
            node.next = nextNode
            nextNode.previous = node
            this.head = node
            return;
        }
        while(current){
            if(count === index){
                if(current.next === null){
                    let prevNode = this.tail
                    prevNode.next = node
                    node.previous = prevNode
                    this.tail = node
                    return
                }
                let prevNode = current.previous
                prevNode.next = node
                node.previous = prevNode 
                node.next = current
            }
            count++
            current = current.next

        }
    }

    deleteLastNode(){
        if(this.head){
            if(this.head == this.tail){
                this.head = null
                this.tail = null
            }else{
                let lastNode = this.tail.previous
                lastNode.next = null 
                this.tail = lastNode
            }
        }
    }

    //:todo reverse list
    reverseList(){

    }
}

const DL = new DoublyLinkedList()
DL.add(10)
DL.add(20)
DL.add(30)
DL.insertAtIndex('Hello', 0)
console.log(DL.toString())
// DL.deleteLastNode()
// DL.deleteLastNode()
// DL.deleteLastNode()
DL.reverseList()
console.log(DL.toString())
