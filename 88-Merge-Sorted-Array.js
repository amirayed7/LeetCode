/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let p3 = m + n - 1

    while(p1 > -1 && p2 > -1){
        if (nums2[p2] >= nums1[p1]){
            nums1[p3] = nums2[p2]
            p3--
            p2--
        }
        else{
            nums1[p3] = nums1[p1]
            p3--
            p1--
        }
    }

    while (p2 >= 0){
        nums1[p3] = nums2[p2]
        p3--
        p2--
    }

    return nums1
};