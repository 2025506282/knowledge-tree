// 冒泡排序:=>
// 1、比较相邻的元素，如果左边比右边大，交换两者位置
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let flag = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = flag;
            }
        }
    }
    return arr;
}
// 22 18 4  30 29 7  16 9  10 33
// 18 4  22 29 7  16 9  10 30 33
// 4  18 22 7  16 9  10 29 30 33
// 4  18 7  16 9  10 22 29 30 33
// 4  7  16 9  10 18 22 29 30 33
// 4  7  9  10 16 18 22 29 30 33

// Q,H,C,Y,P,A,M,S,R,D,F,X
// H,C,Q,P,A,M,S,R,D,F,X,Y
 // 选择排序，快速找到最大的元素
function fastSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        let flag = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = flag;
        console.log(arr);
    }
    return arr;
}
// 快速排序,选择一个标值，大于标值的放在左边，小于标值的放在右边，等于的可以放在两边，依次类推直到值为一个
function quickSort(arr) {
    const pivot = arr[0];
    const left = [], right = [];
    if(arr.length < 2) {
        return arr;
    }
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < pivot) {
            left.push(arr[index])
        } else {
            right.push(arr[index]);
        }
    }
    return quickSort(left).concat(quickSort(right));
}
function partition(arr, left, right) {
    let pivot = left,
        index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const arr = [5, 4, 3, 2, 1];
// console.log(bubbleSort([...arr]));
// console.log(fastSort([...arr]));
console.log(quickSort([...arr]));