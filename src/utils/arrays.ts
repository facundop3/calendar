/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param chunk_size {Integer} Size of every group
 */
export const chunkArray = (
  myArray: any[],
  chunk_size: number
): Array<Array<any>> => {
  let index: number = 0;
  let arrayLength: number = myArray.length;
  let tempArray: any[][] = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
};
