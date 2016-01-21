/**
* range: generates a list of a range.  Works like python's range
* https://docs.python.org/2/library/functions.html
*
* @static
* @param {Number} (start) start number or total range from 0
* @param {Number} (stop) stop number
* @param {Number} (step) by number
* @return {Array} -> list of numbers from start to stop by step
* @example
*/

//### also this is copied over from my grizzy file

function range(start, stop, step) {
  var len, result, i;

  start = +start || 0;
  step = typeof step === 'undefined' ? 1 : (+step || 0);

  if (typeof stop === 'undefined') {
    stop = start;
    start = 0;
  } else {
    stop = +stop || 0;
  }

  len = Math.max(Math.ceil((stop - start) / (step || 1)), 0),
  result = new Array(len);

  for (i=0; i<len; i++) {
    result[i] = start;
    start += step;
  }

  return result;
}

function keyRange(n, key_n){
  var i, j, period,
      result = new Array(n),
      num = -1,
      count = -1;

  key_n = typeof key_n !== 'undefined' ? key_n : 10;
  period = n / key_n;
  
  for (i = 0; i < period; i++) {
    num++;
    for (j = 0; j < key_n; j++) {
      count++;
      result[count] = num;
    }
  }

  return result;
}


/**
 * shuffle: get a fully or partially shuffled array
 *
 * @static
 * @param {Array} (array) array to iterate over.
 * @param {number} (factor) by what amount to limit the shuffle by.
 * @returns {Array} a shuffled array.
 * @example
 *
 * gz.shuffle([1,2,3,4,5]); -> [5,3,1,4,2](note:not exactly)
 *
 * gz.shuffle([1,2,3,4,5],3); -> [1,5,3,4,2](note:not exactly)
 *
 */
function shuffle(array, factor) {
  var currentIndex = array.length, 
      temporaryValue, randomIndex, by;

  factor = typeof factor !== 'undefined' ? factor : 1;
  by = 1*factor;

  // While there remain elements to shuffle...
  while (0 < currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= by;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export { range, keyRange, shuffle }