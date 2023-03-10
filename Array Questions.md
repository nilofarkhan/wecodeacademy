# Question 1
Create an array with three elements and print out the second element.
```
let arr = [15,20,30];
console.log(arr.slice(1,-1));
```

# Question 2
Create an array with five elements and print out the length of the array.
```
let arr = [1,2,3,4,5];
console.log(arr.length);
```

# Question 3
Create an array with four elements and print out each element using a for loop.
```
let arr = [2,4,6,8];
for(i=0;i<=arr.length-1;i++){
    console.log(arr[i]);
}
```


# Question 5
Create an array with three elements and add a fourth element to the end of the array.
```
let arr = [1,2,3];
arr.push(6)
console.log(arr)
```


# Question 6
Create an array with four elements and remove the second element.
```
let arr = [2,4,6,8];
arr.splice(1,1);
console.log(arr);
```

# Question 7
Create an array with five elements and remove the last element
```
let arr = [2,4,6,8,10];
arr.pop();
console.log(arr);
```

# Question 9
Create an array with four elements and sort the array in ascending order.
```
let arr = [2,10,4,3];
console.log(arr.sort(ascending));
function ascending(num, num1) {
  return num - num1;
}
```

# Question 10
Create an array with five elements and sort the array in descending order.
```
let arr = [2,10,4,3];
console.log(arr.sort(descending));
function descending(num, num1) {
  return num1 - num;
}
```

# Question 11
Create two arrays, concatenate them and print out the resulting array.
```
let arr1 = [1,2,3,4,5,6];
let arr2 = [12,14,16,18];
let arr = arr1.concat(arr2);
console.log(arr);
```

# Question 12
Create an array with three elements and convert it to a string.
```
let arr = [2, 4, 6];
console.log(arr.toString());
```

# Question 13
Create an array with four elements and reverse the order of the elements.
```
let arr = [2,4,6,8];
console.log(arr.reverse());
```

# Question 14
Create an array with five elements and find the index of a specific value.
```
let arr = [2,4,6,8,10];
console.log(arr.indexOf(8))
```

# Question 15
Create an array with six elements and slice the array to create a new array with the first three elements.
```
let arr = [2,4,6,8,10,12];
arr1 =arr.slice(0, 3);
console.log(arr1);
```

# Question 16
Create an array with six elements and use the map method to double each element.
```
let arr = [2, 4, 6, 8, 10, 12];
console.log(arr.map(text));
function text(num) {
  return num * 2;
}
```

# Question 17
Create an array with four elements and use the while loop to calculate the sum of all elements.
```
let arr= [10,20,30,40]
let a = 0
let sum = 0
while(a < arr.length){
    sum = sum + arr[a]
    a ++
}
console.log(sum)
```

# Question 18
Create an array with five elements and use the filter method to return only the even numbers.
```
let arr = [1,2,3,4,5];
console.log(arr.filter(evenNumber));
function evenNumber(num) {
  return num % 2 === 0;
}
```

# Question 19
Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.
```
let arr = [ 2,4,6]
console.log(arr.join("-"))
```

# Question 20
Create two arrays with three elements each and use the concat method to combine them into a new array.
```
let arr1 = [1,3,5];
let arr2 = [2,4,6];
let arr = arr1.concat(arr2);
console.log(arr);
```