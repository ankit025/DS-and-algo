let arr = [8, 7, 2, 5, 3, 1];
let sum = 10;

// M1  O(n^2)
function v1(arr, sum) {
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    // O(n)
    for (let j = i + 1; j < arr.length; j++) {
      // O(n)
      if (arr[i] + arr[j] == sum) {
        res.push({ i, j });
      }
    }
  }
  return res;
}

//M2 (nlog(n))
function v2(arr, sum) {
  let res = [];
  let myArr = arr.sort(); // O(nlog(n))
  console.log(myArr);
  let low = 0;
  let high = myArr.length - 1;
  while (low < high) {
    //O(n/2)
    if (myArr[low] + myArr[high] == sum) {
      res.push({ low, high });
    }
    if (myArr[low] + myArr[high] < sum) {
      low++;
    } else {
      high--;
    }
  }
  return res;
}
// Total  O(nlog(n))+ O(n) --> O(nlog(n))

//M2 O(n)
function v3(array, sum) {
  let hashMap = {},
    results = [];

  for (let i = 0; i < array.length; i++) {
    // O(n)
    if (hashMap[array[i]]) {
      console.log(1);
      results.push([hashMap[array[i]], array[i]]);
    } else {
      console.log(2);
      hashMap[sum - array[i]] = array[i];
    }
  }
  return results;
}

let result = v3(arr, sum);
console.log(result);
