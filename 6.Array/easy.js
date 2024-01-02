//1. largest element in an array
// brute force may be to sort the array and then return the last number: complexity O(n^2)
// another way is to take min number and swap every time you found number greater than that: complexity O(n)
const findMaxNumber = (arr) => {
    let i = 1;
    let maxNumber = arr[0]
    while(i<arr.length){
        if(maxNumber<arr[i]){
            maxNumber = arr[i]
        }
        i++
        
    }
    return maxNumber
}


//2. second smallest and second largest element in an array
// again brute force would be to sort and return second element from last and start
// another brute force is find first large and small and then again iterate for second small and large
// similar to first one with extra pointer
const findSecondSmallestAndLargest = (arr) => {
    let firstSmall = Infinity
    let secondSmall = firstSmall
    let firstLarge = -Infinity
    let secondLarge = firstLarge

    for(let i=0; i<arr.length; i++){
        if((firstLarge !== arr[i] && secondLarge !== arr[i]) && secondLarge < arr[i]){
            if(firstLarge < arr[i]){
                secondLarge = firstLarge
                firstLarge = arr[i]
            }else{
                secondLarge = arr[i]
            }
        }
        if((secondSmall !== arr[i] && firstSmall !== arr[i]) && firstSmall > arr[i]){
            if(secondSmall > arr[i]){
                secondSmall = firstSmall
                firstSmall = arr[i]
            }else{
                secondSmall = arr[i]
            }
        }
    }
  return {secondSmall, secondLarge, firstLarge, firstSmall}
}


//3. check if array is sorted
// brute for will be iterate for every element and if any element found smaller than current element in a particular iteration then return false: complexity O(n^2)
// here we can use the concept of bubble sort where we swap values when element smaller than then previous element found, for sorted array there will be no iteration
// or in another word for sorted array every element will be larger than it's adjacent previous element
const isArraySorted = (arr) => {
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true
}


//4. remove duplicate from the sorted array
// this uses extra array so space time complexity will be O(n)
const removeDuplicate = (arr) => {
    const newArr = []
    let last = undefined
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== last){
            newArr.push(arr[i])
            last = arr[i]
        }
    }
    return newArr 
}


// optimized in-place version
// it will return array and size upto which array holds unique element
const removeDuplicateOptimized = (arr) => {
    const n = arr.length
    let i = 1; 
    let j = 0;
    while(i<n){
        if(arr[j]===arr[i]){
            i++
        }else{
            j++
            arr[j]=arr[i]
            i++
        }
    }
    return {arr: arr, size: j+1}
}


//5. left rotate an array by one place
const rotateLeftByOne = (arr) => {
    let temp = arr[0]
    for(let i = 0; i< arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = temp
    return arr
}


//6. left rotate an array by D places
const rotateLeftByDPlace = (arr, k) => {
    const temp = []
    const n = arr.length
     const newK = k%n
    for(let i=0; i<newK; i++){
        temp.push(arr[n-1-i])
    }

    for(let i = n-1; i>=newK; i--){
        arr[i] = arr[i-newK]
    }

    for(let i = 0; i<newK; i++ ){
        arr[i] = temp[newK-i-1]
    }

    return arr
}

// optimized solution using reversal algorithm

const optimizedRotateLeftByDPlace = (arr, k) => {
    const n = arr.length
    const newK = k%n
    let i=0
    while(i<newK-i-1){
        let temp = arr[i]
        arr[i] = arr[newK-i-1]
        arr[newK-i-1] = temp
        i++
    }
    i=newK
    let j=n-1
    while(i<=j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    i=0
    j=n-1
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return arr
}

 const optimizedRotateRightByDPlace = (arr, k) => {
    const n = arr.length
    const newK = k%n
    let i=0
    let j = n-newK-1
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    i = n-newK
    j = n-1
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    i=0
    j=n-1
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return arr
}


//7. move zeroes in the end by maintaining correct order of other numbers
const moveZeoToEnd = (arr) => {
    let i=0
    let j=0
    let n = arr.length
    while(j<n){
        if(arr[j] === 0){
            j++
        }else{
            arr[i] = arr[j]
            i++
            j++
        }
    }
    for(let x = i; x < n; x++){
        arr[x] = 0
    }
    return arr
}


//8. linear search: find a number
const linearSearch = (arr, k) => {
    for(let  i =0 ; i< arr.length; i++){
        if(arr[i] === k) return true
    }
    return false
}


//9. return sorted union of two sorted array
// other approaches are using Set or Map but Map and Set takes log(N) for inserting one element so time complexity will be O((m+n)log(m+n))
const  union = (arr1, arr2) => {
    const resultArray = []
    const n = arr1.length
    const m = arr2.length
    let i=0
    let j = 0
    let k = 0
    while(i<n && j<m){
       if(resultArray[k-1] !==arr1[i] && resultArray[k-1] !==arr2[j]) {
            if(arr1[i]<arr2[j]){
            resultArray.push(arr1[i])
            i++
            }else if(arr1[i]>arr2[j]){
                resultArray.push(arr2[j])
                j++
            }else{
                resultArray.push(arr1[i])
                i++
                j++
            }  
            k++   
        }else if(resultArray[k-1] === arr1[i])  {
            i++
        }else if (resultArray[k-1] === arr2[j]){
            j++
        }
    }
    while(j<m){
        if(resultArray[k-1] !== arr2[j]){
            resultArray.push(arr2[j])
            k++
        }
        j++
    }
    while(i<n){
        if(resultArray[k-1] !== arr1[i]){
            resultArray.push(arr1[i])
            k++
        }
        i++
    }
    return resultArray
}


//10. find missing number from an array having numbers from 1 to n
// optimized solution 1
const findMissingNumber = (arr, n) => {
    let sumOfN = (n*(n+1))/2
    let arraySum = 0
    for(let i=0; i<arr.length; i++){
        arraySum = arraySum + arr[i]
    }
    return sumOfN - arraySum
}

//optimized solution 2 : need to know XOR => XOR of two same number is 0, XOR of number with 0 is the same number
const optimizedMissingNumber = (arr, n) => {
    let xor1 = 0;
    let xor2 = 0;
    for(let i= 0; i< n-1; i++){
        xor1 = xor1^arr[i]
        xor2 = xor2^(i+1)
    }
    xor2 = xor2^n
    return xor1^xor2
}


//11. count maximum consecutive ones in the array having only 1s and Os.
const maxConsecutiveOne = (arr) => {
    let count=0
    let tempCount=0
    for(let i =0; i<arr.length; i++){
        if(arr[i]===0 ){
            if(tempCount > count){
                count = tempCount
            }
            tempCount = 0
        }else{
            tempCount++
        }
    }
    return tempCount > count ? tempCount : count
}


//12. array having every number twice except one find that single one
const findSingleNumber = (arr) => {
    let singleNumber = 0 
    for(let i = 0; i < arr.length; i++){
        singleNumber = singleNumber^arr[i]
    }
    return singleNumber
}


//13. longest subarray with given sum k (positive integers)
const longestSubArray = (arr, k) => {
    const n  = arr.length
    let tempSize = 0
    let i = 0
    let j = 0
    let tempSum = arr[i]
    while(j<n){
        while(i<=j && tempSum > k){
            tempSum = tempSum - arr[i]
            i++
        }
        if(tempSum === k){
            tempSize = tempSize > j-i+1 ? tempSize : j-i+1
        }
        j++
        if(j<n){
            tempSum = tempSum + arr[j]
        }
    }
    return tempSize

}

console.log(longestSubArray([1, 1, 3, 5, 1, 1, -1, 1, 1, 1, 1], 5));


//14. longest subarray with given sum k (positive + negative)
const longestSubarrayPositiveNNegative = (a, k) => {
    let n = a.length; // size of the array

    let preSumMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        // calculate the prefix sum till index i
        sum += a[i];

        // if the sum = k, update the maxLen
        if (sum === k) {
            maxLen = Math.max(maxLen, i + 1);
        }

        // calculate the sum of remaining part i.e. x-k
        let rem = sum - k;

        // calculate the length and update maxLen
        if (preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem);
            maxLen = Math.max(maxLen, len);
        }

        // finally, update the map checking the conditions
        if (!preSumMap.has(sum)) {
            preSumMap.set(sum, i);
        }
    }

    return maxLen;
}

console.log(longestSubarrayPositiveNNegative([1, 1, 3, 5, 1, 1, -1, 1, 1, 1, 1], 5));