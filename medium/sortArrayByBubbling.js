
/**
 * https://leetcode.cn/problems/sort-an-arra
 * 
 * Bubble Sort
 * The bubble sort algorithm sorts an array by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order.
 */
const sortArrayByBubbling = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let flag = true;
        for (let j = 0; j < nums.length - i; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
                flag = false;
            }
        }
      
        if (flag) {
            break;
        }
    }
  
    return nums;
};

const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};

console.log(sortArrayByBubbling([5, 3, 2, 1]));