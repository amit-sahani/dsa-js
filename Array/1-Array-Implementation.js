// creating class for Array
class MyArray{
    constructor(){
        this.length=0;
        this.data = {}
    }

    get(index){
        return this.data
    }

    push(element){
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--;

    }
    
    delete(index){
        const item = this.data[index]
        this.shift(index)
    }

    shift(index){
        for(let i = index; i<this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1]
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push("First Element")
newArray.push("Second Element")
newArray.push("Third Element")
newArray.push("Fourth Element")
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.delete(1);
console.log(newArray);


