//1. Selection sort => select min element and place at starting of the array
// In all cases complexity is O(n^2)

const selectionSort = (arr) => {
    const n = arr.length
    for(let i=0; i< n-1; i++){
        let tempIndex = i
        for(let j = i+1; j< n; j++){
            if(arr[tempIndex]>arr[j]){
                tempIndex  = j
            }
        }
        let tempVal = arr[tempIndex]
        arr[tempIndex] = arr[i]
        arr[i] = tempVal

    }
    return arr
}

//2. Bubble sort =>  pick one element compare with remaining as swap as soon as it get's higher number and then place highest number at end
// In average and worst case complexity is O(n^2)
// In best case it will be O(n) => as we can check if we have swapped any number or not

const bubbleSort = (arr) => {
    const n = arr.length
    for(let i=0; i<n; i++){
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

//Optimized for best case scenarios
const bubbleSortOptimized = (arr) => {
    const n = arr.length
    for(let i=0; i<n; i++){
        let swapCount = 0;
        console.log('run')
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                swapCount++
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        if(swapCount===0) break;
    }
    return arr
}

//3. Insertion sort => always takes an element and places at their correct position.
// works best with stream of data
// average and worst case complexity: O(n^2)
// best case complexity: O(n) 

const insertionSort = (arr) => {
    const n = arr.length
    for(let i=1; i<n; i++){
        let currentVal = arr[i]
        for(let j=i-1; j>=0 && currentVal < arr[j]; j--){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
    return arr
}

console.log(insertionSort([77, 3, 2, 10, 5, 22, 24, 19]))
