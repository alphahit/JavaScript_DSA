let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
let intervals2 = [
  [1, 4],
  [3, 5],
  [2, 6],
];

function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
    } else {
      merged.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }
  merged.push([start, end]);
  return intervals;
}

console.log(mergeIntervals(intervals));
console.log(mergeIntervals(intervals2));



/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {


    if (intervals.length === 0) {
        return [];
    }

  const merged = [];
    intervals.sort((a, b) => a[0] - b[0]);
    merged.push(intervals[0]);
      for (let i = 1; i < intervals.length; i++) {
        let lastMergedInterval = merged[merged.length - 1];
        let currentInterval = intervals[i];

        // Check for overlap
        if (lastMergedInterval[1] >= currentInterval[0]) {
            // Overlap: merge by updating the end of the last merged interval
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // No overlap: add the current interval as a new one
            merged.push(currentInterval);
        }
    }

    return merged;
};