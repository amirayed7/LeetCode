/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p = 0

    for (let i = 1; i <= nums.length; i++){
        if (nums[i] !== nums[p]){
            p += 1
            nums[p] = nums[i]
        }
    }

    return p
};

