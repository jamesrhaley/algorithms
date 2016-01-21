const CUTOFF = 22;

var comp = function (a, b){
  return a <= b
}

var swap = function (array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

var insertionSort = function (array, from, to) {
    for (var i = from; i <= to; ++i) {
      var element = array[i];
      
      for (var j = i - 1; j >= from && array[j] > element; --j) {
        var tmp = array[j];

        array[j + 1] = tmp;
      }
      array[j + 1] = element;
    }
  };

// find the median of three, the difference here is no swapping 
// happens.  the goal is to make a stable sort so we don't want to
// change the order.  Only the value of the median is returned
var med3 = function (a, lo, mid, hi){
  return (
    a[lo] < a[mid] ? 
    // if true this group
      (a[mid] < a[hi] ? mid : a[lo] < a[hi] ? hi : lo) : 
    // if false this group
      (a[hi] < a[mid] ? mid : a[hi] < a[lo] ? hi : lo)
    );
};

var partition = function (array, lo, hi) {
  // the variables are kind of confusing to save on instantiation.
  // k is half the length of the partition. and at the end it is an
  // incrementer.  Pivot is the median index then it is the median.
  var k = ((hi + lo) / 2)>>0,
      i = lo, j = hi-1,
      left_CoOccurrence = lo, right_CoOccurrence = hi-1,
      pivot = med3(array, lo, k, hi);
  
  swap(array, pivot, hi)
  pivot = array[hi];
  
  while (true) {

    while (array[i] < pivot) {
      i++;
    }

    while (pivot < array[j]) {
      j--;
    }

    // If i and j cross, then we are done
    if (i >= j) {
      break;
    }

    // Swap, so that smaller goes on left greater goes on right
    swap(array, i, j);

    // move all equal to pivot left
    if (array[i] === pivot){
      swap(array, i, left_CoOccurrence)
      left_CoOccurrence++;
    }

    // move all equal to pivot right
    if (array[j] === pivot){
      swap(array, j, right_CoOccurrence)
      right_CoOccurrence--;
    }
    // ready for next round
    i++;
    j--;

  }


  // Move pivot element to its correct index
  swap(array, i, hi)

  j = i-1;
  for (k = lo; k < left_CoOccurrence; k++){
    swap(array, k, j);
    j--;
  }

  i = i+1;
  for (k = hi-1; k > right_CoOccurrence; k--){
      swap(array, i, k);
    i++;
  }

  return [j,i];
};

function sorting (array, lo, hi) {
  var index;

  if ( hi-lo < CUTOFF ) {

    insertionSort(array, lo, hi);

  } else {

    index = partition(array, lo, hi);

    if (lo < index[0]){
      sorting(array, lo, index[0]);
    }
    
    if (index[1] < hi){
      sorting(array, index[1], hi);
    }
  }

  return array;
}

function quickSort(array) {
  return sorting(array, 0, array.length - 1);
}

export { quickSort }
