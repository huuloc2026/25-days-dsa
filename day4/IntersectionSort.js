"use strict";
function intersect(nums1, nums2) {
    let frequently = new Map();
    // Key: number -> value: NumOfFrequently
    // if
    for (let i = 0; i < nums1.length; i++) {
        if (!frequently.has(nums1[i])) {
            frequently.set(nums1[i], 1);
        }
        else {
            frequently.set(nums1[i], frequently.get(nums1[i]) + 1);
        }
    }
    let result = [];
    for (let j = 0; j < nums2.length; j++) {
        if (frequently.has(nums2[j]) && frequently.get(nums2[j]) > 0) {
            result.push(nums2[j]);
            frequently.set(nums2[j], frequently.get(nums2[j]) - 1);
        }
    }
    return result;
}
