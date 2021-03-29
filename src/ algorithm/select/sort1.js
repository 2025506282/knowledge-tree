function selectSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(selectSort([1,3,2,1,4,567,123]))

// 512, 613,700,810, 9000