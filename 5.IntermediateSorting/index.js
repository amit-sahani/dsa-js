//1. merge sort
// follow divide and conquer algorithm
// divide the algo into 2 parts one divide and then merge
// complexity in all cases O(n*log(n))

const merge = (arr, low, mid, high) => {
    let left = low;
    let right = mid+1;
    const tempArray = []
    
    while(left <=mid && right <=high){
        if(arr[left]<=arr[right]){
            tempArray.push(arr[left])
            left++
        }else{
            tempArray.push(arr[right])
            right++
        }
    }
    while(left<=mid){
            tempArray.push(arr[left])
            left++
    }
    while(right<=high){
        tempArray.push(arr[right])
        right++
    }

    for(let i=low; i<=high; i++){
        arr[i] = tempArray[i-low]
    }
}

const mergeSort = (arr, low, high) => {
    if(low>=high){
        return 
    }
    const mid = Math.floor((low + high)/2)
    console.log(low, mid, high)

    mergeSort(arr, low, mid)
    mergeSort(arr, mid+1, high)
    merge(arr, low, mid, high)
    return arr
}

// console.log(mergeSort([77, 3, 2, 10, 5, 22], 0, 5))

// 2. recursive bubble sort

const bubbleSortRecursive = (arr, high) => {
    if(high==1){
        return
    }
    let swap = 0
    for(let i=0; i< high-1; i++){
        if(arr[i]>arr[i+1]){
            const temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swap++
        }
    }
    if(swap===0) return arr
    bubbleSortRecursive(arr, high-1)
    return arr
}

//  console.log(bubbleSortRecursive([1, 2, 3, 4, 5, 6, 7], 6))

//3. recursive insertion sort

const insertionSortRecursion = (arr, pointer) => {
    if(pointer === arr.length){
        return
    }
    let current = arr[pointer]
    for(let i=pointer-1; i >=0 && current < arr[i]; i--){
       let temp = arr[i]
       arr[i] = arr[i+1]
       arr[i+1] = temp

    }
    
    pointer++
    insertionSortRecursion(arr, pointer)
    return arr
}

//console.log(insertionSortRecursion([7, 6, 5, 4, 3, 2, 1], 1))

//4. Quick sort: complexity for best and average case O(n*log(n))
// worst case: O(n^2)
// select pivot

const positionPivot = (arr, low, high) => {
    let pIndex = Math.floor((low+high)/2)
    let pivot = arr[pIndex]
    let i = low;
    let j = high;
    while(i < j){
            while(arr[i] <= pivot ){
                i++
            }
            while(arr[j] > pivot ){
                j--
            }
            
            if(i<j){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
             }
    }
    let temp = arr[pIndex]
    arr[pIndex] = arr[j]
    arr[j] = temp
    return j;
}

const quickSort = (arr, low, high) => {
    if(low < high){
        let pivotIndex = positionPivot(arr, low, high)
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
    }
    return arr
}

// console.log(quickSort([ 1, 2, 3, 4, 5, 6, 4, 7], 0, 6))