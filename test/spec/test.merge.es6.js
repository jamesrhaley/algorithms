import { mergeSort } from '../../src/js/mergeSort/mergeSort';
import { quickSort } from '../../src/js/quickSort/quickSort3way';
import { range, keyRange, shuffle } from '../../src/js/makeNumbers';


describe('ranges', () => {
    it('range', () => {
        expect(range(10))
            .toEqual([0,1,2,3,4,5,6,7,8,9]);
    });

    it('keyRange', () => {
        expect(keyRange(10,5))
            .toEqual([0,0,0,0,0,1,1,1,1,1]);

        expect(keyRange(10,2))
            .toEqual([0,0,1,1,2,2,3,3,4,4]);
    });
});

describe('mergeSort', () => {
    it('sort', () => {
        expect(mergeSort([3,2,5], (a,b) => a < b ))
            .toEqual([2,3,5]);
    });

    it('sortLarge', () => {
        var fixed = range(60000)
        var shuffled = shuffle(range(60000))
        expect(mergeSort(shuffled, (a,b) => a < b )).
            toEqual(fixed);
    });

    it('sortLarge_Few_Keys', () => {
        var fixed = keyRange(60000,10000)
        var shuffled = shuffle( keyRange(60000,10000) )
        expect(mergeSort(shuffled, (a,b) => a < b )).
            toEqual(fixed);
    });
});

describe('quickSort', () => {
    it('sort', () => {
        expect(quickSort([3,2,5], (a,b) => a < b ))
            .toEqual([2,3,5]);
    });

    it('sortLarge', () => {
        var fixed = range(60000)
        var shuffled = shuffle(range(60000))
        expect(quickSort(shuffled, (a,b) => a < b )).
            toEqual(fixed);
    });

    it('sortLarge_Few_Keys', () => {
        var fixed = keyRange(60000,10000)
        var shuffled = shuffle( keyRange(60000,10000) )
        expect(quickSort(shuffled, (a,b) => a < b )).
            toEqual(fixed);
    });
});