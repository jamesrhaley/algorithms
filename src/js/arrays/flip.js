import { swap } from '../helpers'
/**
 * flip: an reverse method
 *
 * @static
 * @param {Array} (array) array to iterate over.
 * @returns {Array} a reversed array.
 * @example
 *
 * flip([1,2,3,4,5]); -> [5,4,3,2,1]
 *
 */

function flip(array){
    var len = array.length,
        halfLen = Math.ceil(len / 2),
        front,
        back = len-1;

    for (front = 0; front < halfLen; front++) {
        swap(array, front, back);
        back--;
    }
    return array;
}

export { flip }