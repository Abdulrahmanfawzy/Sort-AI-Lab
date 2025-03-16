const { quickSort, quickSortInPlace } = require('./quicksort');
const bigArray = Array.from({length: 100000}, () => Math.random());

console.time('Recursive QuickSort');
quickSort(bigArray);
console.timeEnd('Recursive QuickSort');

console.time('In-place QuickSort');
quickSortInPlace([...bigArray]);
console.timeEnd('In-place QuickSort');

console.time('Built-in Sort');
[...bigArray].sort((a, b) => a - b);
console.timeEnd('Built-in Sort');