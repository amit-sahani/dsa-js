class Node {
    constructor(data, next) {
        this.data = data
        this.next = next || null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    // adding data to next node
    add(data){
        const node = new Node(data)
        if(!this.head){
            this.head = node
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node
        return;
    }

    // add note at any index
    insertAtIndex(data, index){
        let current = this.head
        const node = new Node(data)
        while(index){
            current = current.next
            index--
        }
        tempNext = current.next
        current = node
        current.next = tempNext

    }

    //print linked list
    toString(){
        let output = "head"
        let current = this.head
        while(current){
            output = output + " -> " + current.data
            current = current.next
        }
        output = output + " -> null"
        return output
    }

    //add array elements from array to linked list
    arrayToList(arr){
        let count = 1
        let current = this.head
        if(!current){
            this.head = new Node(arr[0])
            current = this.head
        }else{
            while(current.next){
                current = current.next
            }
            current.next  = new Node(arr[0])
        }
       current = current.next
        while(count<arr.length){
            const node = new Node(arr[count++])
            current.next = node
            current = current.next
        }
    }

    //inserting node at beginning
    insertAtStart(data){
        let current = this.head
        const node = new Node(data)
        console.log(node)
        if(!current){
            this.head = node
        }else{
            let tempNext = this.head.next
            this.head  = node
            this.head.next = tempNext
        }
    }

    //delete last node
    deleteLastNode(){
        let current = this.head
        let next = current
        while(current.next){
            next = current
            current = current.next
        }
        next.next = null
    }

    //length
    length(){
        let count = 0
        let current = this.head
        while(current){
            count++
            current = current.next
        }
        return count
    }

    indexOf(data){
        let index = -1
        let current = this.head
        while(current){
            index ++
            if(current.data === data){
                break
            }
            current = current.next
        }
        return -1
    }

}

const node = new Node(10)
const node1 = new Node(true)
const LL = new LinkedList()
LL.add(10)
LL.add(true)
LL.add('Amit')
LL.arrayToList([7,8,9,10]);
console.log(LL.toString())
LL.insertAtStart("Start")
console.log(LL.toString())
// console.log(LL.deleteLastNode());
// console.log(LL.deleteLastNode());
console.log(LL.toString())
console.log(LL.length())
console.log(LL.insertAtIndex('new', 1))
console.log('index of start', LL.indexOf(11))

