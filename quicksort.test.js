const { quickSort, quickSortInPlace } = require('./quicksort');

test('sorts array recursively', () => {
    expect(quickSort([3,1,4,2])).toEqual([1,2,3,4]);
});

test('sorts in-place', () => {
    const arr = [5,3,9,1];
    quickSortInPlace(arr);
    expect(arr).toEqual([1,3,5,9]);
});

test('handles duplicates', () => {
    expect(quickSort([5,2,5,3])).toEqual([2,3,5,5]);
});