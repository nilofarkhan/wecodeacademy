## Question 1.
Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.
```
let str = "HiWecode"
let str1 = "WecodeAcademy"
function test(ans)
{
  if (ans.length < 6) {
    return ans;
  }
  let ans1 = ans;
    
  if (ans.substring(8, 4) === 'code') 
    {
    
    ans1 = ans.substring(0, 4) + ans.substring(8,ans.length);
      
  }
  return ans1;
}

console.log(test(str));
console.log(test(str1));
```
## Question 2.
Write a JavaScript program to capitalize the first letter of each word of a given string.
```
let ans = "the quick brown fox"
function test(str) 
{
    str = str.split(" ");

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(test(ans));
```
## Question 3.
Write a JavaScript program to check whether all the digits in a given number are the same or not.
```
let a = 1234
function test(num) {
  let first = num % 10;
  while (num) {
    if (num % 10 !== first)
     return false;
    num = Math.floor(num / 10);
    }
    return true
  }
console.log(test(a));
```
## Question 4.
Write a JavaScript function that reverse a number.
```
let n = 12345;
function test (num){
    num = num + "";
    return num.split("").reverse().join("");
}
console.log(test(n));
```
## Question 5.
Write a JavaScript function to extract unique characters from a string.
```
let a = "mynameisnilofar";
function test(str1)
{
 let str=str1;
 let uniql="";
 for (let i=0;i < str.length;i++)
 {

 if(uniql.indexOf(str.charAt(i))==-1)
  {
  uniql += str[i];  
  
   }
  }
  return uniql;  
}  
console.log(test(a));
```
## Question 10.
Print below pattern
1 2 3 4 5
 2 3 4 5
  3 4 5
   4 5
    5
```
for (let i = 5; i >= 1; i--) {
  let ans = "";
  for (let j= 1; j <= 5-i; j++) {
    ans = ans + " ";
  }
  for (let k = 1; k <= 2 * i -1; k++) {
    ans = ans + k;
  }
  console.log(ans);
}
```


