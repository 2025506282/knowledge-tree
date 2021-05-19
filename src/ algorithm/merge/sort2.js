function merge(arr1, arr2) {
    var result = [];
    while(arr1.length > 0 && arr2.length > 0) {
        if(arr1[0] < arr2[0]) {
            result.push(arr1.shift())
        } else {
            result.push(arr2.shift());
        }
    }
}
function mergeSort(arr) {
    let lengthArr = arr.length;
    if(lengthArr === 0) {
        return [];
    }
    while(arr.length > 1) {
        let arrayItem1 = arr.shift();
        let arrayItem2 = arr.shift();
        let mergeArr = merge(arrayItem1, arrayItem2);
        arr.push(mergeArr);
    }
    return arr[0];
}
let arr1 = [[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]];
// let arr2 = [[1,4,6],[7,8,10],[2,6,9],[3,7,13],[1,5,12]];
mergeSort(arr1);
// mergeSort(arr2);
