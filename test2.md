# Question 1
 Write a JavaScript function to capitalize the first character of the string.

for example:
wecodeacademy

output:
Wecodeacademy
```
let str = "wecodeacademy"
let str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);
```
# Question 2
Write a JavaScript function to insert a string within a string at a particular position

for example:
We are learning exercises.

now insert the word JavaScript at 14 position so output will be :

We are learning JavaScript exercises.
```
let a = "We are learning exercises.";
let b = "JavaScript "
let output = [a.slice(0,16), b, a.slice(16)];
console.log(output);
```
# Question 5
Print below pattern using repeat function

     $
    $$$
   $$$$$
  $$$$$$$
 $$$$$$$$$
$$$$$$$$$$$
```
for (let i = 1; i <= 11; i++) {
  let val = "$" + "";
 console.log(val.repeat(i*2-1));
}
```

# Question 6
Ask below questions :

What is your name?
What is your birth year?
What is your address ?
What is your country code?
What is your mobile number?
Now using string template literal syntax show below output based on your answer:

My name is Sajid Khan. I was born in 1993 and my current age is 30 years. My address is Jhotwara, Jaipur and my mobile number is +919565465654.
```
let Name = prompt("What is your name?");
let birthYear= Number(prompt("What is your birth year?"));
let age = 2023-birthYear;
let address = prompt("What is your address ?");
let countryCode = prompt("What is your country code?");
let mobile = prompt("What is your mobile number?");
console.log(`My name is ${Name} I was born in ${birthYear} and my current age is ${age} years. My address is ${address} and my mobile number is ${mobile}.`);
```
# Question 7Divide a string in two part.

Now in right side part add Hello in the end In left side of the string add World in starting

for example:

let str = "Wecode Academy"

output:
Wecode Hello World Academy
```
let str = "Wecode Academy";
let str1 = str.slice(0,6);
console.log(str1.concat(" hello"))
let str2 = str.slice(6,14);
console.log(str2.concat("world "))
```