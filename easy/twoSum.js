/**
 * https://leetcode.cn/problems/two-sum/
 * 
 * Two numbers in the array sum to the target value, which means that find a different number in the array that can be added to the current number to get the target value.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let results;
    if (nums.length < 2) {
        return results;
    }
    const hashTable = {};
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];  
        if (hashTable[diff] !== undefined) {
            results = [hashTable[diff], i];
            break;
        }
        hashTable[nums[i]] = i;
    }

    return results;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

console.log(twoSum([3, 2, 4], 6)); // [2, 1]

console.log(twoSum([3, 3], 6)); // [0, 1]