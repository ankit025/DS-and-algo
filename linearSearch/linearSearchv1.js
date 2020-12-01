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

function linearFunction(myArr, elementToFind) {
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] == elementToFind) {
      return i;
    }
  }
  return null;
}

let result = linearFunction(rainbow, "orange");
console.log(result,"result");

function linearFunctionv2(myArr, elementToFind) {
  return myArr.indexOf(elementToFind);
}

let result1 = linearFunctionv2(rainbow, "orange");
console.log(result1,"result1");
