//1. print name N times using recursion

const printNameRecursively = (n) => {
    if(n===0){
        return
    }
    console.log('Amit')
    printNameRecursively(n-1)
}

//2. print 1 to N using recursion

const printNNumbers = (n, count=1) => {
    const counter = count
    if(count > n || count === 0){
        return
    }
    console.log(counter)
    printNNumbers(n, counter+1)
}

//3. print N to 1 using recursion

const printNtoOne = (n) => {
    if(n===0){
        return 
    }
    console.log(n)
    printNtoOne(n-1)
}

//4. sum of first N numbers using recursion

const sumOfNNumbers = (n) => {
     if(n===0){
        return n
     }
    return n + sumOfNNumbers(n-1)
}


//5. factorial of number N using recursion

const factorialRecursion = (n) => {
    if(n===0){
        return 1
    }
    return n*factorialRecursion(n-1)
}

//6. reverse an array using recursion

const reverseArrayRecursion = (array, count=0) => {
     if(count === Math.floor(array.length/2)){
        return array
     }
     const n = array.length
     let temp = array[count]
     array[count] = array[n-count-1]
     array[n-count-1] = temp
     return reverseArrayRecursion(array, count+1)
}


//7. check if string is palindrome

// const isPalindromeRecursive = (n, reverseNum=0, div) => {
//     console.log(n, reverseNum, div||n)
//     div = Math.floor((div||n)/10)
    
//     const rem = (div||n)%10
//     reverseNum =  reverseNum*10 + rem
//     if(div===0){
//         return n === reverseNum
//     }    
//     let palindrome = isPalindromeRecursive(n, reverseNum, div)
   

// }

// console.log(isPalindromeRecursive(123))

//8. Fibonacci number using recursion


const fibonacciRecursion = (N) => {

    if(N===1) {
        return 1
    }
    if(N===0){
        return 0
    }
    return fibonacciRecursion(N-1) + fibonacciRecursion(N-2);
}
