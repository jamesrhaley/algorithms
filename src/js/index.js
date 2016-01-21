
import { mergeSort } from './mergeSort/mergeSort'
import { quickSort } from './quickSort/quickSort3way'


global.msort = mergeSort;
global.qsort = quickSort;

console.log(
    '\n',
    'msort([3,2,4], (a,b) => a<b)\n',
    msort([3,2,4], (a,b) => a<b),
    '\nqsort([3,2,4], (a,b) => a<b)\n',
    qsort([3,2,4], (a,b) => a<b)
)
