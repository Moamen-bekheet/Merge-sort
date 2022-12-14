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

function mergeArrs(leftArr, rightArr){
    let [i,j] = [0,0];
    let sortedArr = [];
    while((i<leftArr.length)&&(j<rightArr.length)){
        if(leftArr[i]<=rightArr[j]){
            sortedArr.push(leftArr[i]);
            i++;
        }
        else{
            sortedArr.push(rightArr[j]);
            j++;
        }
    }
    while((i>=leftArr.length)&&(j<rightArr.length)){
        sortedArr.push(rightArr[j]);
        j++;
    }
    while((i<leftArr.length)&&(j>=rightArr.length)){
        sortedArr.push(leftArr[i]);
        i++;
    }
    return sortedArr;
}

console.log(mergeSort([9,8,7,6,5,4,3,2,1]));
