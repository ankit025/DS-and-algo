/*
In computer science, a linear search or sequential search is a method for finding an element within a list. 
It sequentially checks each element of the list until a match is found or the whole list has been searched.
The time complexity of the linear search algorithm is O(n). 

Steps
--> Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
--> If x matches with an element, return the index.
--> If x doesn’t match with any of elements, return -1.
*/

var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// M1
function linearFunction(myArr, elementToFind) {
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] == elementToFind) {
      return i;
    }
  }
  return null;
}
//M2
function linearFunctionv2(myArr, elementToFind) {
  return myArr.indexOf(elementToFind);
}
//M3
function linearFunctionv3(myArr, elementToFind) {
  let counter = 0;
  while (counter < myArr.length) {
    if (myArr[counter] == elementToFind) {
      return counter;
    }
    counter++;
  }
}

let result = linearFunction(rainbow, "orange");
console.log(result, "result");

let result1 = linearFunctionv2(rainbow, "orange");
console.log(result1, "result1");

let result2 = linearFunctionv3(rainbow, "orange");
console.log(result2, "result2");
