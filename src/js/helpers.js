/**
 * insertionSort: inplace sorting function
 *
 * @private
 * @param {Array} (array) array to iterate over.
 * @param {Number} (start) array to iterate over.
 * @param {Number} (end) array to iterate over.
 * @param {Function} (comp) array to iterate over.
 *
 */
var insertionSort = function (array, start, end, comp) {
  for (var i = start; i < end; i++) {
    var element = array[i];
    
    for (var j = i - 1; j >= start && comp(element, array[j]); j--) {
      var tmp = array[j];

      array[j + 1] = tmp;
    }
    array[j + 1] = element;
  }
}

/**
 * swap: inplace swap elements in an array
 *
 * @private
 * @param {Array} (array) array to iterate over.
 * @returns {Array} a reversed array.
 *
 */
var swap = function (array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

export { insertionSort, swap }