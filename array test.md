## Question 1. 
Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.
```
let fruits = ["apple", "banana", "orange"];
if (fruits.includes("orange")) {
  console.log("yes");
} else {
  console.log("no");
}
```
## Question 2. 
Given an array of numbers, write a function that returns the sum of all the even numbers in the array.
```
let arr = [1,2,3,4,5,6,7,8,9,10];
let ans = arr.filter(test);
let ans1 = ans.reduce((a,b) => a+b ); 
let num = 0;
function test(num) {
  return num % 2 === 0;
}
console.log(ans1);
```
## Question 3.
Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.
```
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 6];

let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

const unique = unique1.concat(unique2);

console.log(unique);
```
## Question 4.
Given an array of strings, write a function that returns the longest string in the array.
```
let arr = ["my","name","is","nilofar"];  
let lgth = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > lgth) {
    lgth = arr[i].length;
    longest = arr[i];
  }
}
console.log(longest);
```
## Question 5.
Write a function that takes an array of numbers and returns the largest number in the array.
```
let arr = [1, 14, 23, 110, 9, 92];
function largest(arr){
  let num = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] >= num){
      num = arr[i];
    }
  }
  return num;
}
console.log(largest(arr));
```
## Question 6.
Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.
```
let arr = [1,2,3,4,5,6,7,8,9,10];
let ans = arr.filter(test); 
let num = 0;
function test(num) {
  return num % 2 === 0;
}
console.log(ans);
```
## Question 8.
Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).
```
let array1= [1,4,1,1,5,9,2,7];
let array2 = [1,8,2,5,1]
function arraysCommon(array1, array2) {
  let ans = [];
  array1.sort();
  array2.sort();
  let i = 0;
  let j = 0;
  while(i<array1.length && j<array2.length){
    if(array1[i] === array2[j]){
      ans.push(array1[i]);
      i++;
      j++;
    }
    else if(array2[i] > array1[j]){
    i++;
    }
    else{
    j++;
    }
  }
  console.log(ans);
}
arraysCommon(array1,array2);
```
## Question 9.
Write a function that takes an array of numbers and returns a new array where each element is the square of the original element
```
let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function(element, index, array){
    array[index] = element* element;
});
console.log(numbers);
```
## Question 11.
Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function
```
let arr = [1,2,3,4,5,6,7,8,9,10];
let ans = arr.filter(test);
let num = 0;
function test(num) {
  return num >5
}
console.log(ans);
```
## Question 12.
Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function
```
let numbers = [65, 44, 12, 4];
let newArr = numbers.map(myFunction)

function myFunction(num) {
  return num +1;
}
console.log(newArr);
```
## Question 14.
Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.
```
let arr =["my","name","is","nilofar"];
function characterCount(arr) {
  return arr.reduce(function(charCount, item) {
    return charCount + item.length;
  }, 0); 
}
console.log(characterCount(arr))
```