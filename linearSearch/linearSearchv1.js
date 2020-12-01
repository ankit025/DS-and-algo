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
console.log(result);
