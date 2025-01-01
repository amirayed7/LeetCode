/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let p = 1

    if (nums.length <= 2) {return nums.length}
    
    for (let i = 2; i < nums.length; i++){
        if(nums[i] !== nums[p-1]){
            p++
            nums[p] = nums[i]
        }
    }

    return p + 1
};