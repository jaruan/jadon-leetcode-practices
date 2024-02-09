/**
 * https://leetcode.cn/problems/sort-an-arra
 * 
 * Selection Sort 
 * The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayBySelection = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        const minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                swap(nums, minIndex, j);
            }
        }
    }

    return nums;
};


const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};


console.log(sortArrayBySelection([5, 3, 2, 1]));