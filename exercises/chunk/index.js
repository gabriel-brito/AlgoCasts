// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];

  // We're gonna iterate through all the elements in this array
  for (let i = 0; i < array.length; i++) {
    // We're gonna grab the last chunk of result;
    const lastChunk = result[result.length - 1];

    // If there's no lastChunk, or if the last chunk length is equal
    // to the "chunk size" (second argument), we're gonna create a new chunk into
    // the chunked array;
    if (!lastChunk || lastChunk.length === size) {
      result.push([array[i]])
    } else {
      // If exists and the length is not equal to the "chunk size", we add the
      // current element to the last chunk.
      lastChunk.push(array[i])
    }
  }

  return result;
}

// Lecture solution
// function chunk(array, size) {
//   const chunked = [];

//   for (let element in array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element])
//     } else {
//       lastChunk.push(element)
//     }
//   }

//   return chunked;
// }

// Lecture solution 2
// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));

//     index += size;
//   }

//   return chunked;
// }

module.exports = chunk;
