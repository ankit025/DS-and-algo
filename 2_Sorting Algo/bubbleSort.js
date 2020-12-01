/*
 */

let ArrayData = [1, 2, 4, 3, 8, 6, 5, 9];
var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length ; j++) {
      if (array[j] > array[j + 1]) {
          let temp = array[j]
          array[j]=array[j+1]
          array[j+1]=temp
      }
    }
  }
  return array
}

let result =bubbleSort(rainbow);
console.log(result)