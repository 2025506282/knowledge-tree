function mergeSort(arr) {
    const len = arr.length;
    if(len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left, right) {
    let result = [];
    while(left.length > 0 && right.length > 0) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while(left.length) {
        result.push(left.shift());
    }
    while(right.length) {
        result.push(right.shift());
    }
    return result;
}
const test = [6,5,4,21,23,1];
// console.log(mergeSort(test));

function mergeSort2(intervals) {
    let res = [];
    let index = 0;
    let length = intervals.length;
    while(index < length) {
        let left = intervals[index][0];
        let right = intervals[index][1];
        while(index < length - 1 && right > intervals[index + 1][0]) {
            right = Math.max(right, intervals[index+1][1]);
            index++;
        }
        index++;
        console.log('res:', res);
        res.push([left, right]);
    }
    return res;
}
const arr2 = [[10,30],[20,60],[80,100],[150,180]];
console.log(mergeSort2(arr2))