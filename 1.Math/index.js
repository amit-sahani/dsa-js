//1. count number of digits in a number N

// solution 1
function countDigits(n){
    let count = 0
    let div = Math.pow(n*n, 0.5)
    if(n===0){
        count++
    }
   while(div>0){
        div = Math.floor(div/10)
        count ++
    }
    return count
} // o(n)

// solution 2
function countDigitsUsingLog(n){
    if(n===0){
        console.log(1)
        return
    }
    return Math.floor(Math.log10(Math.pow(n*n, 0.5)) + 1)
}

//2. Reverse thew number

function reverseNumber(n){
    let sign = n<0?-1:1;
    let newNum = 0
    let rem = 0
    let div = Math.pow(n*n, 0.5)
    while(div !=0){
        rem = div%10
        div = Math.floor(div/10)
        newNum = newNum*10 + rem
    }
  return sign*newNum
}

//3. check if number is palindrome

function isPalindrome(n){
    const reverseNum = reverseNumber(n)
    return reverseNum === n
}

//4. find gcd or hcf of a number 

// brute force approach : complexity O(n) => n is the size of min number
function gcdNumber(n1, n2){
    const min = n1>n2 ? n2: n1;
    let ans=min;
    for(let i=1; i<=min; i++){
        if(n1%i===0 && n2%i===0){
            ans = i
        }
    }
    return ans
}

// optimal approach :  complexity O(log(min(a, b)))
function gcdNumberEuclidTheorem(n1, n2){
    if(n2 === 0){
        return n1
    }
    return gcdNumberEuclidTheorem(n2, n1 % n2)
}


//5. check if number is armstrong number

function isArmstrongNumber(n){
    let count = 0
    let newNumber = 0
    let div = n
    while(div!==0){
        div = Math.floor(div/10)
        count++
    }
    div = n
    while(div!==0){
        let rem = div%10
        div = Math.floor(div/10)
        newNumber = newNumber + Math.pow(rem, count)
    }
    return n === newNumber
}


//6. print all the divisors of the number

// brute force approach : complexity O(n)
function printDivisors(n){
    const divisors = []
    for(let i=1; i<=n; i++){
        if(n%i===0){
            divisors.push(i)
        }
    }
    return divisors
}

// optimal approach : complexity O(sqrt(n))
function printDivisorsOptimal(n){
    const divisors = []
    for(let i=1; i<= Math.pow(n, 0.5); i++){
        if(n%i===0){
            divisors.push(i)
            if(i !== n/i){
                divisors.push(n/i)
            }
        }
    }
    return divisors
}


//7. if the number is prime

// optimal approach : complexity O(sqrt(n))
function isPrime(n){
    for(let i=2; i<= Math.pow(n, 0.5); i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

console.log(isPrime(3))