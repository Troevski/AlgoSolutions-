// 1) Given an array of banknotes of certain denominations [1, 2, 5, 10, 20, 50],their number is unlimited.
// It is necessary to give him this money using the minimum number of banknotes.


const getCash = (bills: number[], total: number) => {
   
    bills.sort((a,b) => b - a);

    let totalCash: number[] = [];
    let remaining = total;
    if(remaining === 0) return 'Cannot make the exact total with given bills';

    for(let i = 0; i < bills.length; i++){
        let cash: number  = bills[i];
        
        while(remaining - cash >= 0){
          totalCash.push(cash);
          remaining -= cash
        }
    }

    return totalCash
};
  
  

console.log(getCash([1, 2, 5, 10, 20, 50], 91)); // [ 50, 20, 20, 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 82)); // [ 50, 20, 10, 2 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 73)); // [ 50, 20, 2, 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 40)); // [ 20, 20 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 12)); // [ 10, 2 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 3)); // [ 2, 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 1)); // [ 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 0)); // ['some tekst']



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2) isPalindrome
type objCouner = {
  [key: string] : number
}

const isPalindrome = (str: string) => {
   
  str = str.toLowerCase().replace(/[^a-zа-я0-9]/gi, '');
  
  let objCounter: objCouner = {};
  let totalObjNums: number = 0;
  
  for(let i = 0; i < str.length; i++){
    let letter: string = str[i];
    
    if(!objCounter[letter]){
      objCounter[letter] = 1
    }else{
      objCounter[letter] ++
    }
  }
  
  for(let key in objCounter){
    if(objCounter[key] % 2 !== 0){
      totalObjNums++
        if(totalObjNums > 1) return false
    }
  }
    
  return true
}
  
console.log(isPalindrome('0_0 (: /-\ :) 0–0')) // true
console.log(isPalindrome('My age is 0, 0 si ega ym.')) // true
console.log(isPalindrome('топот')); // trueee
console.log(isPalindrome('л')); // true
console.log(isPalindrome('абвгвбж')); //false
console.log(isPalindrome('А муза рада музе без ума да разума')); // trueee
console.log(isPalindrome('а роза упала на лапу Азора')); // true
console.log(isPalindrome('1')); //true
console.log(isPalindrome('91019')); //true
console.log(isPalindrome('22.02.2022')); //true


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given an 0-indexed array of integers arr[] of size n, find its peak element. An element is considered to be peak if it's value is greater than or equal to the values of its adjacent elements (if they exist).
// Note: The output will be 1 if the index returned by your function is correct; otherwise, it will be 0.

// Example:
// Input: 
// n = 3
// arr[] = {1, 2, 3}
// Peak element's index: 2
// Output: 
// 1
// Explanation: 
// If the index returned is 2, then the output printed will be 1. Since arr[2] = 3 is greater than its adjacent elements, and there is no element after it, we can consider it as a peak element. No other index satisfies the same property.


const peakElement = (arr: number[], n:number) => {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (
      (mid === 0 || arr[mid - 1] <= arr[mid]) &&
      (mid === arr.length - 1 || arr[mid] >= arr[mid + 1])
    ) {
      return mid;
    } else if (mid > 0 && arr[mid] > arr[mid + 1]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

console.log(peakElement([1, 2, 3], 3)); // Ожидаемый вывод: 2
console.log(peakElement([1, 3, 20, 4, 1, 0], 6)); // Ожидаемый вывод: 2
console.log(peakElement([10, 20, 15, 2, 23, 90, 67], 7)); //Ожидаемый вывод может быть 1 или 5, так как оба элемента являются пиковыми



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
const getMinMax = (arr: number[], n:number) => {
  // return [Math.min(...arr), Math.max(...arr)];

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i <= n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return [min, max];
};

console.log(getMinMax([3, 2, 1, 56, 10000, 167], 6)); 
console.log(getMinMax([1, 345, 234, 21, 56789], 5)); 
console.log(getMinMax([10, 20, 15, 2, 23, 90, 67], 7)); 



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const reverse = (str: string ) => {
  return str.split(' ').reverse().join('')
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.

// Note :-  l and r denotes the starting and ending index of the array.

// Example 1:

// Input:
// N = 6
// arr[] = 7 10 4 3 20 15
// K = 3
// L=0 R=5

// Output : 7
// Explanation :
// 3rd smallest element in the given 
// array is 7.

//l - starting idx of arr
//r - ending idx of arr
//k - size of sub arr of idxes 

const kthSmallest = (arr, l, r, k) => {
  const slicedArr = arr.slice(l, r + 1).sort((a, b) => a - b);
  return slicedArr[k - 1];
};


console.log(kthSmallest([7, 10, 4, 3, 20, 15], 0, 5, 3)); //7
console.log(kthSmallest([7, 10, 4, 20, 15], 0, 4, 4)); // 15






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given an Array Arr of N positive integers and an integer X. Return the frequency of X in the array.
// Input:
// N = 6
// Arr = {1, 2, 3, 3, 2, 1}
// X = 2
// Output: 
// 2
// Explanation: Frequency of 2 is 2.


const findFrequency = (ar: number[], n, x: number) => {
  const arr: number[] = [];

  // for (let i = 0; i < n; i++) {
  //   const letter = v[i];
  //   if (letter === x) {
  //     arr.push(letter);
  //   }
  // }
  ar.map((el: number) => (el === x ? arr.push(el) : null));
  return arr.length;
};

console.log(findFrequency([1, 1, 1, 1, 1], 5, 1)); //
console.log(findFrequency([1, 2, 3, 3, 2, 1], 6, 2));



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// Данный код реализует алгоритм трехпутевой сортировки (также известный как алгоритм сортировки голландского флага) для решения задачи сортировки массива, содержащего только элементы 0, 1 и 2. 
// Цель алгоритма — отсортировать массив таким образом, чтобы сначала шли все 0, затем 1, и в конце — 2, и сделать это за один проход по массиву, не используя дополнительную память.


const sort012 = (arr, N) => {
  let low = 0,
      mid = 0,
      high = N - 1;

  while (mid <= high) {
    switch (arr[mid]) {
      case 0:
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
        break;

      case 1:
        mid++;
        break;

      case 2:
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
        break;
    }
  }

  return arr;
};


console.log(sort012([1, 0, 2], 3));
console.log(sort012([1, 0, 2], 3));
console.log(sort012([1, 0, 2],  3)); 







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an unsorted array A of size N that contains only non negative integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

// Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

const subarraySum = (arr, n, s) => {
  let start = 0;
  let sum = 0;

  for (let end = 0; end < n; end++) {
    sum += arr[end];

    while (sum >= s) {
      if (sum === s) {
        return [start + 1, end + 1];
      }
      sum -= arr[start];
      start++;
    }
  }

  return [-1];
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an unsorted array arr[] of size n having both negative and positive integers. The task is place all negative element at the end of array without changing the order of positive element and negative element.

const segregateElements = (arr, n) => {
  const positive: number[]  = [];
  const negative: number[]  = [];

  // const positive = arr.filrer((num) => num > 0)
  // const negative = arr.filrer((num) => num < 0)

  for (let i = 0; i < n; i++) {
    let num = arr[i];
    num < 0 ? negative.push(num) : positive.push(num);
  }

  return positive.concat(negative);
};

console.log(segregateElements([1, -1, 3, 2, -7, -5, 11, 6], 8));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.

// Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

// Expected Time Complexity : O(n+m)
// Expected Auxilliary Space : O(n+m)

const doUnion = (arrA, arrB) => new Set([...arrA, ...arrB]).size

console.log(doUnion([1, 2, 3, 4, 5], [1, 2, 3])); // 5

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Given an array, rotate the array by one position in clock-wise direction.
// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4

const rotate = (arr) => {
  const last = arr.pop();
  arr.unshift(last);
  return arr;
};

console.log(rotate([1, 2, 3, 4, 5]));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

// Example 1:

// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4


const missingNumber = (array, n) => {
  if (array.length === n) return "no missing element";

  let total = (n * (n + 1)) / 2;
  let arrSum = array.reduce((acc, curr) => acc + curr, 0);

  return total - arrSum;
};

console.log(missingNumber([6, 1, 2, 8, 3, 4, 7, 10, 5], 10)); // 9
console.log(missingNumber([1, 2, 3, 5], 5)); // 4