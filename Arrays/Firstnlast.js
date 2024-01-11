function firstnlastoccurrence(arr, target, start, end) {
    if (start > end) {
        return;
    }
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
        let s = middle;
        let l = middle;

        while (l > start && arr[l - 1] === target) {
            l--;
        }

        while (s < end && arr[s + 1] === target) {
            s++;
        }

        return { first: l, last: s };
    }

    if (arr[middle] > target) {
        return firstnlastoccurrence(arr, target, start, middle - 1);
    } else {
        return firstnlastoccurrence(arr, target, middle + 1, end);
    }
}

const arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
console.log(firstnlastoccurrence(arr, 5, 0, arr.length - 1));
