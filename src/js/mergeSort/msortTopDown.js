// this version does not work

function merge(array, left_start, left_end, right_start, right_end) {
  var result = new Array(right_end - left_start);
  var li = left_start;
  var rj = right_start;
  var resultIndex = 0;

  while (li < left_end || rj < right_end) {

    if (li < left_end && rj < right_end) {

      if (compare(array[li], array[rj])) {
        result[resultIndex++] = array[rj++];

      } else {
        result[resultIndex++] = array[li++];
      }

    } else if (li < leftLen) {
      result[resultIndex++] = array[li++];

    } else if (rj < rightLen) {
      result[resultIndex++] = array[rj++];
    }
  }
  for (var i = left_start; i < result.length; i++){
    array[left_start++] = result[i]
  }
}


/**
 * Sorts an array using top down merge sort.
 * @param {Array} array The array to sort.
 * @param {function} compare The compare function.
 * @returns The sorted array.
 */
function sort(array, start, end, compare) {
  if (end - start <= 1) {
    return array;
  }

  var i;
  var left_start = start
  var left_end = (array.length / 2)>>0;
  var right_start = left_end + 1;
  var right_end = array.length - 1;


  return merge(sort(array, left_start, left_end, compare), 
               left_start, left_end, 
               sort(right, right_start, right_end, compare),
               right_start, right_end,
               compare);
}