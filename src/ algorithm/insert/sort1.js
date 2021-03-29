function insertSort(arr) {
    for(let i = 1;i < arr.length; i++) {
        let j = i;
        let temp = arr[i];
        while(j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}