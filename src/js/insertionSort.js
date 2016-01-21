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

export { insertionSort }