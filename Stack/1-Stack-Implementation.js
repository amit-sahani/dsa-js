// Stack is a last in first out collection
// You can only access the top element
// So for seacrhing any element we have to pop out the element on by one untill we get the required element.
// Complexity
//push O(1)
//pop  O(1)
//peek O(1)
//size O(1)
//search O(n)
//empty O(n)

// Applications of Stack Data Structure
// - Expression Evaluation(used to evaluate pre-fix, post-fiz and in-fix expression)
// - Syntax parsing (may compilers use stack to parse the syntax of expression or program blocks)
// - Browser's Execution Stack
// - Reverse String
// - Valid Paranthesis checking
// - Syntax parsing
// - Undo/Redo
// - DFS
// - Backtracking
// - Function call (use to track active function or sub-routine) 

function Stack (size) {
    const _stack = []
    let _top = -1

    function toString(){
        return _stack.join(',')
    }

    function push(data){
        
        if(_top>=size-1){
            throw new Error('Stack Overflow')
        }else{
            _stack.push(data);
            _top = _top +1 ;
        }
        
    };

    function size(){
        return _top+1;
    }

    function pop(){
        if(_top>1){    
            const lItem =  _stack.pop();
            _top-- ;
            return lItem
        }
    }

    function peek(){
        if(_top>-1){
            return _stack[_top]
        }else{
            return null
        }
    }

    function search(element){
        const temp = [];
        let found = null;
        while(_top>-1){
        if(_stack[_top]==element){
            found = _top;
            break;s
        }
        temp.push(_stack.pop());
        _top--;
    }
    const tempL = temp.length;

    for(let i=0; i<tempL; i++){
        _stack.push(temp.pop())
    }

    return found;
    }

    function empty(){
        while(_top>-1){
            _stack.pop();
            _top--;
        }
    }

    return {
        push,
        pop,
        peek,
        toString,
        search,
        empty,
        size
    }

}

const stack =  Stack(10)
console.log(stack.toString(), stack.size())
for(let i=0; i<10; i++){
    stack.push(10*(i+1));
}
console.log(stack.toString(), stack.size())
stack.pop();
console.log(stack.toString())
console.log(stack.size())
console.log(stack.peek());
console.log(stack.search(20));