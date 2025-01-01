/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = new Map()

    for (let num of nums){
        count.set(num,(count.get(num) || 0) + 1)
    }

    let counter = 0
    let number = null

    for (let [key,value] of count.entries()){
        if (value > counter){
            counter = value
            number = key
        }
    }

    return number
};