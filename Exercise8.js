//For Loop Exercise
//Q.1 Print 1 to 100
for(let i = 1; i <= 100; i++){
    console.log(i);
} 

//Q.2 Print all Odd numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if(i%2===1)
    console.log(i);
} 

//Q.3 Print all Even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if(i%2===0)
    console.log(i);
} 

//Q.4 Print all numbers which are multiple of 5 in 1 to 100
for (let i = 1; i <= 100; i++) {
    if(i%5===0)
    console.log(i);
}

//Q.5 Print all numbers which are multiple of 5 and 15 in 1 to 100
for (let i = 1; i <= 100; i++) {
    if(i%5===0 && i%15===0)
    console.log(i);
}

//Q.6 Print 2's table
for(let x = 2; x <= 20; x=x+2){
    console.log(x);
}

//Q.7 Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times
let Print =Number(prompt("How many times do you want to print Hello WOrld"));
for(let k = 1; k <= Print; k++){
    console.log(k);
    console.log("Hello World");
}

//Q.8 Calculate sum of all numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
} console.log('The sum of all numbers:', sum);

//Q.9 Calculate sum of all odd numbers from 1 to 100
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    if(i%2===1)
    sum1 += i;
}console.log('The sum of all numbers:', sum1);

//Q.10 Calculate sum of all even numbers from 1 to 100
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
    if(i%2===0)
    sum2 += i;
}console.log('The sum of all even numbers:', sum2);

//Q.11 print 1,2,4,8,16,32,64.......upto 2048
for(let i = 1; i <= 2048; i=i*2){
    console.log(i);
}

/*Q.12 print

1,2,3,4,5,6,7,8,9,10
11,12,13,14,15,16,17,18,19,20
.
.
......................99,100*/
for (n = 1; n <= 100; n = n + 1) {
     document.write(n+",");
   if (n % 10 === 0) {
    document.write("<br>");
    document.write("<br>");
   }
   }

//Q.13 pritn 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself.
for(let i=1;i<=100;i++)
    if(i % 3 === 0 && i % 5 === 0 ){
    console.log("fizzbuzz");
    }else{
     console.log(i);
}

/*Q.14 print 10 table like this

 2*1=2
 2*2=4
 2*3=6
 2*4=8
 2*5=10
 .
 .
 .
 2*10=20*/
 for (let i = 1; i <= 10; i++) {
  console.log(2 + "*" + i + "=" + i * 2);
}

/*Q.15 Run a loop from 1 to 50
 From 1 to 10 print "A"
 From 11 to 20 print "B"
 From 21 to 30 print "C"
 From 31 to 40 print "D"
 From 41 to 50 print "E"*/
for(p = 1; p<=50; p++){
    if(p<=10){
        console.log(p + "A");
    }if (p>10 && p<=20){
        console.log(p+ "B");
    }if (p>20 && p<=30){
        console.log(p + "C");
    }if (p>30 && p<=40){
        console.log(p + "D");
    }if (p>50){
        console.log(p + "E");
    }
}

/*Q.16 Run a loop from 50 to 1

From 50 to 41 print "A"
From 40 to 31 print "B"
From 30 to 21 print "C"
From 20 to 11 print "D"
From 10 to 1 print "E"*/
for(q = 50; q>=1; q--){
    if(q<=50 && q >40){
        console.log(q + "A");
    }if (q>30 && q<=40){
        console.log(q + "B");
    }if (q>20 && q<=30){
        console.log(q + "C");
    }if (q>10 && q<=20){
        console.log(q + "D");
    }if (q<=10){
        console.log(q + "E");
    }
}

//Q.17 Print below series 5 25 125.. till number is less than equal to 10000
for(let a =5; a<=10000; a=a*5){
        console.log(a);
}

//Q.18 Print below series 3,6,9,12... till number is less than equal to 500
for(let c =3; c<=500; c=c+3){
        console.log(c);
}

/*Q.19 print below series

120
221
322
423
524
625
726
827
928
1029*/
let d = 20;
for(b = 1; b<=10; d <=29 , b++ ,d++){
    console.log(b,d);
}

//Q.20 print below series 100 95 90 85 80 ... till 0
for(let e=100; e>=0; e--){
    if(e % 5 === 0){
        console.log(e);
    }
}

//Q.21 Number 70 is divisible by which numbers till 70? Find out and print those numbers
for(let f=1; f<=70; f++){
    if(70 % f === 0){
        console.log(f)
    }
}

//while loop Exercise
//Q.1 Write a while loop that logs the numbers 1 to 10 in the console.
let i = 1;
while(i<=10){
    console.log(i)
    i++;
}

//Q.2 Calculate sum of all numbers from 1 to 10
let sum3 = 0;
let l = 1;
while(l<=10){
    sum3 +=l;
    l++;
} console.log("The sum of all numbers:" , sum3);

//Q.3 Counting down from 10 to 1
let g = 10;
while(g>=1){
    console.log(g)
    g--;
}

//Q.4 Print 2's table
let h = 2;
while(h<=20){
     console.log(h);
     h = h+2;
}

//Q.5 Calculate sum of all odd numbers from 1 to 100
let sum4 = 0;
let m = 1;
while(m<=100){
    if(m % 2 === 1){
       sum4 += m;
    }
  m++;
}
  console.log("The sum of all odd numbers:" , sum);

  //do while loop
  //Q.1 Write a do...while loop that logs the numbers 1 to 5 in the console
  let r = 1;
do{
    console.log(r);
    r++;
}while(r<=5);

//Q.2 Counting down from 10 to 1
let s = 10;
do{
    console.log(s);
    s--;
}while(s>=1);

//Q.3 Calculate sum of all numbers from 1 to 10
let t = 1;
let sum5 = 0;
do{
    sum5 += t;
    t++;
}while(t<=10);
console.log("The sum of all numbers:", sum5);

//Q.4 Print 2's table
let u = 2;
do{
    console.log(u);
    u = u+2;
}while(u<=20)

//Q.5 Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times
let user = Number(prompt("please enter a number?"));
let v = 1;
do{
    console.log("Hello world");
    v++;
}while(v<=user);

//Q.6 Calculate sum of all even numbers from 1 to 100
let w = 1;
let sum6 = 0;
do{
    if(w % 2=== 0){
        sum6 +=w;   
    }
    w++;
}while(w<=100);
console.log("The sum of all even numbers:",sum6);