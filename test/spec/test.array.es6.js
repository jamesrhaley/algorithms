import { range } from '../../src/js/makeNumbers';
import { flip } from '../../src/js/arrays/flip';

describe('better than native', () => {
    it('flip', () => {
        expect(flip([1,2,3,4,5]))
            .toEqual([5,4,3,2,1]);
    });

    it('large', () => {
        var forward = range(60000)
        var backward = range(60000).reverse()
        expect(flip(forward))
            .toEqual(backward);
    });
});