## Q1. Create Bill Calculator

```
Ask below Questions

How many french fries (60rs per piece) do you want to order ?
How many burgers (50rs per piece) do you want to order ?
How many plates of chowmin (100rs per plate) do you want to order?
How many plates of Manchurian (80rs per plate) do you want to order?
How many Cokes (50 per piece) do you want to order ?
Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. If user enteres 0 or negative value then consider item count as 0.
```
```
let frenchFries =60;
let burger = 50;
let chowmin = 100;
let Manchurian =80;
let Cokes = 50;
let f = Number(prompt("How many french fries (60rs per piece) do you want to order ?"));
let b = Number(prompt("How many burgers (50rs per piece) do you want to order ?"));
let c = Number(prompt("How many plates of chowmin (100rs per plate) do you want to order?"));
let m = Number(prompt("How many plates of Manchurian (80rs per plate) do you want to order?"));
let co = Number(prompt("How many Cokes (50 per piece) do you want to order ?"));
let totalBill = (frenchFries*f)+(burger*b)+(chowmin*c)+(Manchurian*m)+(Cokes*co);
console.log(totalBill);
```


## Take any number and take other number as 19. Now check their difference by subtracting each other. If both numbers difference is greater than 19 then print triple their absolute difference else print double their absolute difference.

```
let num1 = 30;
let num2 = 19;
let sub = num1-num2;
if(sub > 19){
    console.log(sub * 3);
} else{
    console.log(sub * 2);
}
```

## Write a JavaScript program to check if out of 4 numbers any two numbers are same or not. If yes then print Yes else print No. 

```
  let a1 = 6;
  let a2 = 5;
  let a3 = 2;
  let a4 = 1;
  if(a1==a2||a1==a3||a1==a4||a2==a3 ||a2==a4|| a3==a4 ){
    console.log("Yes")
  }else{
    console.log("no")
  }
  ```

## Q. Using a switch case to do this exercise

```
If number is odd then print Odd
If number is even then print Even
If number is 100 then print 100
Else print 10000
```
```
let num = 2;
switch(num){
    case 1:
        if(num%2===1){
        console.log("odd")
        break;}
    case 2:
        if(num%2===0){
        console.log("Even");
        break;}
    case 3:
        if(num===100){
        console.log(100);
        break;}
    default:
        console.log(1000);
}
```