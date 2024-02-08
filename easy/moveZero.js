/**
 * https://leetcode.cn/problems/move-zeroes
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    const length = nums.length;
    let index = 0;
    for (let i = 0; i < length; i++) {
        if (nums[index] == 0) {
            nums.splice(index, 1);
            nums.push(0);
        } else {
            index += 1;
        }
    }
};


const nums = [0, 1, 0, 3, 12];

moveZeroes(nums);

console.log(nums); // [1, 3, 12, 0, 0]