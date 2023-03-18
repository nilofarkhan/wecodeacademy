## Question 1.
 What is an object in JavaScript?
```
Object ek datastructure hi. jiska use hum data store karne me karte hi. object me data key value ki form me store hoti h.
```
## Question 2.
What is the difference between dot notation and bracket notation for accessing object properties?
```
Dot Notation only allows static keys 
Bracket Notation accepts dynamic keys. 
Static key here means that the key is typed directly, 
Dynamic key here means that the key is evaluated from an expression.
```
## Question 3.
How do you loop through the properties of an object in JavaScript?
```
let  obj ={
  name : "Nilofar",
  mobile :9413036786,
  adderss:"ajmer"
  }
console.log(obj)
```
## Question 4.
 What is the difference between an object and an array in JavaScript?
 ```
 array data store in index type but object data store in key and value types
Arrays are mostly faster than objects.
```

## Question 5.
 Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
```
let obj = {
  name : "Nilofar",
  mobile :9413036786,
  adderss:"ajmer",};
  console.log(Object.entries(obj));
  ```
## Question 6.
Write a function that takes an object representing a person and returns their full name.
```
let obj = { 
        fullName : "Nilofar",
        age : 32,
        number : 9413927786,
        city : "ajmer"    
}
function object(obj){
    return obj.fullName
}
console.log(object(obj));
```
## Question 7.
Create an Object with your personal details. Now print all the keys of the object in ascending order.
```
let myObj = {
  name : "Nilofar",
  mobile :9413036786,
  adderss:"ajmer",
  accountNumber:4654764876,
  bankName:"SBI"
  },
  keys = Object.keys(myObj),
  i, len = keys.length;

keys.sort();

for (i = 0; i < len; i++) {
  k = keys[i];
  console.log(k + ':' + myObj[k]);
}
```
## Question 8.
Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.
```
let myObj = {
  name : "Nilofar",
  mobile :9413036786,
  adderss:"ajmer",
  accountNumber:4654764876,
  bankName:"SBI"
  },
  keys = Object.keys(myObj),
  i, len = keys.length;

keys.sort();

for (i = len-1; i > 0; i--) {
  k = keys[i];
  console.log(k + ':' + myObj[k]);
}
```