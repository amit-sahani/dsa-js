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