/**
 * @description a function that returns a new array in witch every number is the multiplication of all the 
 *              numbers in the original array except the number at the same index.
 *              All numbers are allowed including 0 and negative.
 * @example [1, 2, 3, 4] => [24,12,8,6] // 2*3*4=24, 1*3*4=12, 1*2*4=8, 1*2*3=6
 */
function multiplyArray(arr: number[]) {
  /**
   *  0 is the only problematic number because we can't devide by 0.
   * So lets solve the arrays with 0's first
  */
  const zerosCount = arr.filter(num => num === 0).length;
  if (zerosCount > 1) {
    // If we have more than 1 zero, every multiplication will includ 0 so we will have 0 for every index.
    // return an array full of 0's
    return Array.from(arr).fill(0);
  }
  if (zerosCount === 1) {
    // if we have only 1 zero at index i than every element in the resulting arr will be multiplied by 0 execpt /// the element in index i. The element on index i will be the multiplication of all the other numbers.
    
    // create an array of zeros
    const zeroArr = Array.from(arr).fill(0);
    const zeroIndex = arr.findIndex(num => num === 0);
    // calculate the multiplication of all the numbers in the array ignoring the 0.
    zeroArr[zeroIndex] = arr.reduce<number>((total, num) => num ? total * num : total, 1);
    return zeroArr;
  }
  const totalMultiplication = arr.reduce<number>((total, num) => total * num, 1);
  return arr.map(originalNumber => totalMultiplication / originalNumber);
}

compareAndLog(multiplyArray([0, 0, 3, 4]), [0, 0, 0, 0]);
compareAndLog(multiplyArray([0, 2, 3, 4]), [24, 0, 0, 0]);
compareAndLog(multiplyArray([1, 2, 3, 4]), [24, 12, 8, 6]);
compareAndLog(multiplyArray([1, -2, 3, 4]), [-24, 12, -8, -6]);
compareAndLog(multiplyArray([1, -2, 0, 4]), [0, 0, -8, 0]);
compareAndLog(multiplyArray([1, -2, -3, 4]), [24, -12, -8, 6]);
compareAndLog(multiplyArray([1, 2, 3, 4, 5, 6, 7]), [5_040, 2_520, 1_680, 1_260, 1_008, 840, 720]);



function compareAndLog(arr1: number[], arr2: number[]) {
  console.log(compareArrays(arr1, arr2));
}

function compareArrays(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}