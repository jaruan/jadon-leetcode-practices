/**
 * https://leetcode.cn/problems/sort-an-arra 
 * 
 * Insertion Sort
 * It looks like a resorted deck of cards. The algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
 * 
 * Techniques:
 * Separate the array into two parts: sorted and unsorted. The first element is the sorted part and the rest are unsorted. Then we will move the first element of the unsorted part to the sorted part and keep the sorted part sorted.
 */

const sortArrayByInsertion = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        for (let j = i; j > 0; j--) {
            if (nums[j] < nums[j-1]) {
                swap(nums, j, j-1);
            } else {
                break;
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

console.log(sortArrayByInsertion([5, 3, 2, 1]));