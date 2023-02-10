//pattern questions
/*Q.1 Print pattern
1
11
111
1111
11111      */
for (let i = 1; i <= 5; i++) {
  let ans = "";
  for (let j = 1; j <= i; j++) {
    ans = ans + 1;
  }
  console.log(ans);
}

/*Q.2 Print Pattern
*****
****
***
**
*      */
for (let i = 5; i >= 1; i--) {
    let ans = "";
  for (let j = 1; j <= i; j++) {
    ans = ans + "*";
  }
  console.log(ans);
}

/*Q.3 Print pattern
*
**
***
****
*****       */
for (let i = 1; i <= 5; i++) {
  let ans = "";
  for (let j = 1; j <= i; j++) {
    ans = ans + "*";
  }
  console.log(ans);
}

/*Q.4 Print Pattern
12345
1234
123
12
1      */
for (let i = 5; i >= 1; i--) {
  let ans = "";
  for (let j = 1; j <= i; j++) {
    ans = ans + j;
  }
  console.log(ans);
}

/*Q.5 Print pattern
54321
5432
543
54
5       */
for (let i = 1; i <= 5; i++) {
  let ans = "";
  for (let j =5 ; j >= i; j--) {
    ans = ans + j;
  }
  console.log(ans);
}

/*Q.6 Print pattern
54321
4321
321
21
1     */
for (let i = 1; i <= 5; i++) {
  let ans = "";
  for (let j =6-i; j >= 1; j--) {
    ans = ans + j;
  }
  console.log(ans);
}

/*Q.7 Print pattern
$$$$$
$$$$$
$$$$$
$$$$$
$$$$$      */
for (let i = 1; i <= 5; i++) {
  let ans = "";
  document.write("<br>")
  for (let j = 1; j <= 5; j++) {
    ans = ans + "&";
  }
  document.write(ans);
}

/*Q.8 Print pattern
*****
****
***
**
*
*
**
***
****
*****     */
for (let i = 5; i >= 1; i--) {
    let ans = "";
  for (let j = 1; j <= i; j++) {
    ans = ans + "*";
  }
  console.log(ans);
}
for (let i = 1; i <= 5; i++) {
  let ans = "";
  for (let j = 1; j <= i; j++) {
    ans = ans + "*";
  }
  console.log(ans);
}

/*Q.9 Print pattern
10987654321
987654321
87654321
7654321
654321
54321
4321
321
21
1     */
for (let i = 1; i <= 10; i++) {
  let ans = "";
  for (let j= 11-i; j >= 1; j--) {
    ans = ans + j;
  }
  console.log(ans);
}

/*Q.10 Print pattern
*
**
***
****
*****
****
***
**
*      */
for (let i = 1; i <= 5; i++) {
  let ans = "";
  for (let j = 1; j <= i; j++) {
    ans = ans + "*";
  }
  console.log(ans);
}
for (let i = 4; i >= 1; i--) {
    let ans = "";
  for (let j = 1; j <= i; j++) {
    ans = ans + "*";
  }
  console.log(ans);
}

/*Q.11 Print pattern
*********
 *******
  *****
   ***
    *     */
let star = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= 5 - i; j++) {
    star += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

/*Q.12 Print Pattern
     *
    ***
   *****
  *******
 *********
***********     */
let star = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    star += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);