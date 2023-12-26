//1. count frequency of each element in an array

const frequency = (arr) => {
    const frequencyCollector = {}
    for(let i=0; i<arr.length; i++){
        frequencyCollector[arr[i]] = (frequencyCollector[arr[i]] || 0) + 1 
    }
    return frequencyCollector
}


//2. find highest and lowest element

const highestAndLowestFrequency = (arr) => {
    const frequencyCollector = {}
    for(let i=0; i<arr.length; i++){
        frequencyCollector[arr[i]] = (frequencyCollector[arr[i]] || 0) + 1 
    }
    let low = {key:undefined, value:Infinity}
    let high ={key:undefined, value:-Infinity}
    for (const key in frequencyCollector) {
        if(frequencyCollector[key]<low.value){
            low.key = key
            low.value = frequencyCollector[key]
        }if(frequencyCollector[key]>high.value){
            high.key = key
            high.value = frequencyCollector[key]
        }

    }
    return {
        low, high
    }
}
