function quickSort(arr) {

    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    console.log('pivotIndex', pivotIndex, pivot, arr);
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
function quickSort2(arr, left, right) {
    let pivotIndex;
    let len = arr.length;
    left = typeof left !== 'number' ? 0 : left;
    right = typeof right !== 'number' ? len - 1 : right;
    if (left < right) {
        // 
        pivotIndex = partition(arr, left, right);
    }

}
function partition(arr, left, right) {
    let pivot = left;
    let index = pivot + 1;
    // 循环中如果有小于参照的，就将它交换index的位置，然后index向右移动到下一个位置
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
        }
    }
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const res = [3, 1, 467, 234];
// const res = [5, 4, 3, 2, 1];

console.log(quickSort([...res]));

// 3，2，5，7，6 8 5
// 3，2，5  6  7  3
// 3，2  5   2
// 2，3 1


/**
  * 
  * @param prices int整型一维数组 
  * @return int整型
  */
function maxProfit(prices) {
    if (prices.length < 2) {
        return 0;
    }
    let max = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if(profit > max) {
                max = profit;
            }
        }
    }
    return max;
}
console.log('maxProfit', maxProfit([,]))

