/**
 * https://leetcode.cn/problems/two-sum/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let results = [];

    nums.forEach((num, curIndex) => {
        const diff = target - num;
        const index = nums.indexOf(diff);
        if (index > -1) {
            results = [index, curIndex];
        }
    });

    return results;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

console.log(twoSum([3, 2, 4], 6)); // [2, 1]

console.log(twoSum([3, 3], 6)); // [0, 1]