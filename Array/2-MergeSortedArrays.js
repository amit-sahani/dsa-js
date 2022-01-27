// We have two sorted array and we have to merge the to array such that the
// resulted array should also be sorted.
 function mergeSortedArray(array1, array2){
     const mergedAray=[];
     let arrayPoint1 = array1[0];
     let arrayPoint2 = array2[0];
     i=1,j=1;
     if(array1.length<1){
         return array2;
     }
     if(array2.length<1){
        return array1;
    }
    counter=1
    while(arrayPoint1||arrayPoint2){
        console.log(counter++)
        if(!arrayPoint2||arrayPoint1<arrayPoint2){ // !arrayPoint2 to avoid comparing with undefined and always giving true
            mergedAray.push(arrayPoint1);
            arrayPoint1 = array1[i]
            i++;
        }else{
            mergedAray.push(arrayPoint2);
            arrayPoint2 = array2[j]
            j++;
        }
    }
    return mergedAray
 }

 const a = [8, 200, 400]
 const b = [1, 3, 5, 9,10, 11, 12, 300]

 console.log(mergeSortedArray(a, b).join(','));