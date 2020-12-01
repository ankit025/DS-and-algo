/*
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

--> Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted.
--> Best Case Time Complexity: O(n). Best case occurs when array is already sorted.
--> Auxiliary Space: O(1)
--> Boundary Cases: Bubble sort takes minimum time (Order of n) when elements are already sorted.
 */

let ArrayData = [1, 2, 4, 3, 8, 6, 5, 9];


function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

let result = bubbleSort(ArrayData);
console.log(result);
