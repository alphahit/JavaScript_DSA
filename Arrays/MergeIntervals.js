let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
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
          }else { merged.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
          }
      }
      merged.push([start, end]);
      return merged;
}

console.log(mergeIntervals(intervals));
