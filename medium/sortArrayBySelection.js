/**
 * https://leetcode.cn/problems/sort-an-arra
 * 
 * Selection Sort 
 * The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
 * 
 * Techniques:
 * Focus on the sorted number will be moved to the beginning of the array after each iteration. So we can reduce the number of iterations by 1 for each iteration.
 */
const sortArrayBySelection = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        const minIndex = i; 
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) { // Core meaning: Always swap the value of the minIndex for each iteration
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