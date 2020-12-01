/*
Search a sorted array by repeatedly dividing the search interval in half. 
Begin with an interval covering the whole array. If the value of the search 
key is less than the item in the middle of the interval, narrow the interval to the lower half. 
Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

--> Compare x with the middle element.
--> If x matches with middle element, we return the mid index.
--> Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
--> Else (x is smaller) recur for the left half.

O(log n)  =>  worse and average case
O(1)      =>  Best case

*/

var myArray = [
  "ACADEMY DINOSAUR",
  "ACE GOLDFINGER",
  "ADAPTATION HOLES",
  "AFFAIR PREJUDICE",
  "BENEATH RUSH",
  "BERETS AGENT",
  "BETRAYED REAR",
  "BEVERLY OUTLAW",
  "BIKINI BORROWERS",
  "YENTL IDAHO",
  "YOUNG LANGUAGE",
  "YOUTH KICK",
  "ZHIVAGO CORE",
  "ZOOLANDER FICTION",
  "ZORRO ARK",
];

function binarySearch(items, value) {
  let startIndex = 0;
  let stopIndex = items.length - 1;
  while (startIndex <= stopIndex) {
    let middle = Math.floor((startIndex + stopIndex) / 2);
    if (value === items[middle]) {
      return middle;
    }
    if (value < items[middle]) {
      stopIndex = middle - 1;
    }
    if (value > items[middle]) {
      startIndex = middle + 1;
    } else {
      console.log("Not Found this loop iteration. Looping another iteration.");
    }
  }
}

let result = binarySearch(myArray, "YOUNG LANGUAGE");
console.log(result);
