function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];

    // Phase 1: Finding the intersection point of the two runners.
    do {
        slow = nums[slow]; // move slow by 1
        fast = nums[nums[fast]]; // move fast by 2
    } while (slow !== fast);

    // Phase 2: Finding the "entrance" to the cycle
    let ptr1 = nums[0];
    let ptr2 = slow;
    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1; // or ptr2, as both are at the entrance now
}
