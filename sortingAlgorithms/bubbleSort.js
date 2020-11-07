const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);

/*

Worst Time complexity --> O(n^2)
Space Complexity --> O(1)

Bubble sort is a simple sorting algorithm.
This sorting algorithm is comparison-based algorithm 
in which each pair of adjacent elements is compared 
and the elements are swapped if they are not in order. 
This algorithm is not suitable for large data sets as 
its average and worst case complexity are of Ο(n2) 
where n is the number of items.


As far as being the fastest on an extremely small and/or nearly sorted set of data, 
while that can cover up the weakness of bubble sort (to at least some degree),
an insertion sort will essentially always be better for either/both of those.



https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm
https://www.bigocheatsheet.com/
https://www.toptal.com/developers/sorting-algorithms



*/

