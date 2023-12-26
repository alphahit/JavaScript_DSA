var kthLargestNumber = function(nums, k) {
    const quickSort = (arr) => {
        if (arr.length < 2) {
            return arr;
        }
        let pivot = parseInt(arr[arr.length - 1]);
        let left = [];
        let right = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (parseInt(arr[i]) < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...quickSort(left), pivot.toString(), ...quickSort(right)];
    };

    let sorted = quickSort(nums);
    return sorted[sorted.length - k];
};
