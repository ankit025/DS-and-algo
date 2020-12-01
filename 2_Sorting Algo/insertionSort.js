/*
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at 
the correct position in the sorted part.

Algorithm
To sort an array of size n in ascending order:
1: Iterate from arr[1] to arr[n] over the array.
2: Compare the current element (key) to its predecessor.
3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

--> Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted.
--> Best Case Time Complexity: O(n). Best case occurs when array is already sorted.
--> Auxiliary Space: O(1)
--> Boundary Cases: Insertion sort takes maximum time to sort if elements are sorted in reverse order.
    And it takes minimum time (Order of n) when elements are already sorted.
 */

let ArrayData = [1, 2, 4, 3, 8, 6, 5, 9];

function InsertionSort(myArr) { //pass array
  for (let i = 0; i < myArr.length; i++) { //access each element of array
    let current = myArr[i]; //current element
    let j = i - 1; //get prior index
    while (j > -1 && current < myArr[j]) {
      myArr[j + 1] = myArr[j];
      j--;
    }
    myArr[j + 1] = current;
  }
  return myArr;
}

let result = InsertionSort(ArrayData);
console.log(result);
