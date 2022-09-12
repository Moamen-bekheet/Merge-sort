function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    else{
        let middleIndex = parseInt(arr.length/2);
        let leftArr = mergeSort(arr.slice(0,middleIndex));
        let rightArr = mergeSort(arr.slice(middleIndex));
        return mergeArrs(leftArr, rightArr);
    }
}

console.log(mergeSort([1,2,3]))
