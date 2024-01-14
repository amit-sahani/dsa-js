//1.two Sum : check if a pair with given sum exists in Array

//brute force
const twoSum = (arr, sum) => {
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === sum){
                return [i, j]
            }
        }
    }
    return [-1, -1]
}

//optimized two sum
const twoSumOptimized = (nums, target) => {
    const hash = {}
    hash[target-nums[0]] = 0
    for(let i = 1 ; i< nums.length; i++){
        if(hash[nums[i]] || hash[nums[i]]===0){
            return [hash[nums[i]], i]
        }else{
            hash[target-nums[i]] = i
        }
    }
    return [-1, -1]
}

//2. sort array of 0, 1s and 2s

const sortArray = (nums) => {
     let zero = 0
     let one = 0
     for(let i=0; i<nums.length; i++){
        if(nums[i]===0){
            zero++
        }
        if(nums[i]===1){
            one = one + 1
        }
     }
     console.log(zero, one)
     for(let j=0; j<nums.length; j++){
        if(zero){
            nums[j] = 0
            zero--
        }else if(one){
            nums[j] = 1
            one--
        }else{
            nums[j] = 2
        }
        
     }
     
     return nums
}

//optimized way
const sortArrayOptimized = (nums) => {
    let low = 0
    let mid = 0
    let high = nums.length-1
    while (mid<=high){
        if(nums[mid]===0){
            nums[mid] = nums[low]
            nums[low] = 0
            mid++
            low++
        }
        else if(nums[mid]===1){
            mid++
        }
        else{
            nums[mid] = nums[high]
            nums[high] = 2
            high--
        }
    }
    return nums
}

//3. majority element: array of size n return an element with frequency more than n/2 
const majority = (nums) => {
    const n = nums.length 
    const target = Math.floor(n/2)
    const hash = {}
    for(let i=0; i<n; i++){
        hash[nums[i]] = (hash[nums[i]] || 0) + 1
        if(hash[nums[i]]>target){
            return nums[i]
        }
    }
}

// majority optimized
const majorityOptimized = (nums) => {
    const n = nums.length
    let number = nums[0]
    let count = 0
    for(let i=0; i<n; i++){
        if(count == 0 ){
            number = nums[i]
        }
        if(number == nums[i]){
            count++
        }else{
            count--
        }
    }
    return number
}
