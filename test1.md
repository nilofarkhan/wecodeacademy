# Q1. Create Bill Calculator
 Ask below Questions

How many french fries (60rs per piece) do you want to order ?
How many burgers (50rs per piece) do you want to order ?
How many plates of chowmin (100rs per plate) do you want to order?
How many plates of Manchurian (80rs per plate) do you want to order?
How many Cokes (50 per piece) do you want to order ?
Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. If user enteres 0 or negative value then consider item count as 0.

```
const frenchFries =60;
const burger = 50;
const chowmin = 100;
const Manchurian =80;
const Cokes = 50;
const f = Number(prompt("How many french fries (60rs per piece) do you want to order ?"));
const b = Number(prompt("How many burgers (50rs per piece) do you want to order ?"));
const c = Number(prompt("How many plates of chowmin (100rs per plate) do you want to order?"));
const m = Number(prompt("How many plates of Manchurian (80rs per plate) do you want to order?"));
const co = Number(prompt("How many Cokes (50 per piece) do you want to order ?"));
let totalBill = 0;
if (f > 0){
  totalBill = totalBill + frenchFries * f;
}
if (b > 0){
  totalBill = totalBill + burger * b;
}
if (c > 0){
  totalBill = totalBill + chowmin * c;
}
if (m > 0){
  totalBill = totalBill + Manchurian * m;
}
if (co > 0){
  totalBill = totalBill + Cokes * co;
}
console.log("Total Bill: " + totalBill);
```

# Question 2
Print below Pattern

$$#$$#$$
$$#$$#
$$#$$
$$#
$$

```
for (let a = 5 ; a >= 1 ; a--){
  let str = "";
  for(let b = 1 ; b <= a ; b++){
    if(b%2===1){
     str = str + "$$";
  } else{
     str = str + "#"
  }
}
  console.log(str)
}
```

# Question 4
 Using a switch case to do this exercise

 Ask user a question "Do you drink tea/coffee" ?

-If user says tea print tea
-If user says coffee then print coffee
-If users say anything else then print water

```
let ans = prompt("Do you drink tea/coffee?");
if(ans==="tea"){
  ans = true;
}else if(ans==="coffee"){
  ans = false;
}else {
  ans = ans;
}
switch(ans){
  case true:
    console.log("tea");
    break;
  case false:
    console.log("coffee");
    break;
    default:
      console.log("water");
}
```

 # Question 5
Ask user his/her age, "What is your age?"

If user age is greater than 18 and less than 50 then ask user "Would you like to have a coffee?" If user click on Okay then ask for his/her choice with questions "What type of coffee you want to have?" and finally in the alert show message "Hello Sir/Mam, here is your coffee ###"

If user age is less than 18 then ask him question in confirm box "Would you like to have tea?" If user says yes then ask "What type of tea do you want?" and then in alert show "Hello Sir/Mam, here is your ### tea." Else show "Sorry visit again please." in alert box

```
let age = Number(prompt("What is your age?"));
if(age>18 && age<50){
  let ask = confirm("Would you like to have a coffee?");
  if(ask){
    let coffee = prompt("What type of coffee you want to have?");
    alert(`Hello Sir/Mam, here is your coffee ${coffee}`);
  }else{
    alert("Sorry visit again please.");
  }
}
if(age<18){
  let ask1 = confirm("Would you like to have tea?");
  if(ask1){
    let tea = prompt("What type of tea do you want?");
    alert(`Hello Sir/Mam, here is your tea ${tea}`);
  }else{
    alert("Sorry visit again please.");
  }
}
```

# Question 6
 Take any number and take other number as 39. Now check their difference by subtracting each other. If both numbers difference is greater than 40 then print double their absolute difference else print triple their absolute difference.

 ```
let num1 = 30;
let num2 = 39;
let sub;
if(num1-num2<0){
  sub= (num1-num2)*-1;
} else{
  sub = num1-num2;
}
if(num1-num2>40){
  console.log(sub*2);
}else{
  console.log(sub*3);
}
```
# Question 7
Write a JavaScript program to check from two given integers, whether one is greater than 18 and another one is less than 10.

If yes then print sum of both the numbers Else print multiplication of both numbers

```
let num1 = 2;
let num2 = 9;
if(num1 > 18 && num2 < 10){
  console.log(num1+num2);
} else{
  console.log(num1*num2);
}
```
# Question 8
Write a JavaScript program to check if out of 5 numbers any two numbers are same or not. If yes then print Yes else print No.
```
  let a1 = 6;
  let a2 = 5;
  let a3 = 2;
  let a4 = 1;
  let a5 = 1;
  if(a1===a2||a1===a3||a1===a4||a1===a5||a2===a3 ||a2===a4||a2===a5|| a3===a4||a3===a5||a4===a5 ){
    console.log("Yes")
  }else{
    console.log("no")
  }
  ```