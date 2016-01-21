import { insertionSort as miniSort } from '../insertionSort'


function merge(array, copy, start, mid, end, comp) {
  var i = start,
      li = start,
      ri = mid;

  for (;start < end; start++){
    copy[start] = array[start];
  }

  while(li < mid && ri < end) {
    if(comp(copy[li], copy[ri])) {
      array[i++] = copy[li++];
    }
    else {
      array[i++] = copy[ri++];
    }
  }
  while(li < mid) {
    array[i++] = copy[li++];
  }
  while(ri < end) {
    array[i++] = copy[ri++];
  }
}

function msort(array, copy, start, end, comp) {
  var mid;
  if (end - start < 2) {
    return;
  }
  if (end - start < 8) { 
    miniSort(array, start, end, comp); 
    return; 
  }

  mid = ((start + end)/2)>>0;
  msort(array, copy, start, mid, comp);
  msort(array, copy, mid, end, comp);
  merge(array, copy, start, mid, end, comp);
};

function mergeSort(array, comp) {
  var copy = new Array(array.length);
  msort(array, copy, 0, array.length, comp);
  return array;
};

export { mergeSort }
