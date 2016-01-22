
import { mergeSort } from './mergeSort/mergeSort'
import { quickSort } from './quickSort/quickSort3way'
import { flip } from './arrays/flip'

global.msort = mergeSort;
global.qsort = quickSort;
global.flip = flip

console.log(
    '\n',
    'msort([3,2,4], (a,b) => a<b)\n',
    msort([3,2,4], (a,b) => a<b),
    '\nqsort([3,2,4], (a,b) => a<b)\n',
    qsort([3,2,4], (a,b) => a<b)
)
