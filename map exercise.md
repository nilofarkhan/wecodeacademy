## Question 1.
Create a new Map and add key-value pairs to it.
```
const map = new Map();
map.set('name', 'nilofar');
map.set('age', 32);
console.log(map);
```
## Question 2.
Get the value of a specific key in a Map.
```
const map = new Map();
map.set('name', 'nilofar');
map.set('age', 32);
console.log(map.get('name'));
```
## Question 3.
Check if a key exists in a Map.
```
let map=new Map();  
map.set(1,"HTML");  
map.set(2,"CSS");  
map.set(3,"Bootstrap");  
console.log(map.has(2));
```
## Question 4.
 Iterate over the keys of a Map using a for...of loop.
```
let map = new Map();
map.set('name', 'nilofar');
map.set('age', 32);
map.set('city','ajmer')
for (let key of map.keys()){
	console.log(key);
}
```
## Question 5.
Iterate over the values of a Map using a for...of loop.
```
let map = new Map();
map.set('name', 'nilofar');
map.set('age', 32);
map.set('city','ajmer')
for (let value of map.values()){
	console.log(value);
}
```
## Question 6.
 Iterate over the key-value pairs of a Map using a for...of loop.
```
let map = new Map();
map.set('name', 'nilofar');
map.set('age', 32);
map.set('city','ajmer')
for (let keyValue of map.entries()){
	console.log(keyValue);
}
```
## Question 7.
 Convert a Map to an array of key-value pairs.
```
let map = new Map();
map.set('name', 'nilofar');
map.set('age', 32);
map.set('city','ajmer')
let arr = Array.from(map.entries());
console.log(arr);
```
```
let map = new Map();
map.set('name', 'nilofar');
map.set('age', 32);
map.set('city','ajmer')
console.log([...map]);
```
## Question 8.
 Convert an array of key-value pairs to a Map.
```
let arr = [
  ['name', 'nilofar']
  ['age', 32]
];
let map = new Map(arr);
console.log(map);
```
## Question 9.
 Use the forEach() method to iterate over the key-value pairs of a Map.

## Question 10.
Use the Map keys() method to get an iterator for the keys of a Map.
```
let map=new Map()
map.set("a",11);
map.set("b",2);
map.set("c",5);
console.log(map.keys());
```
## Question 11.
Use the Map values() method to get an iterator for the values of a Map.
```
let map=new Map()
map.set("a",11);
map.set("b",2);
map.set("c",5);
console.log(map.values());
```
## Question 12.
 Use the Map entries() method to get an iterator for the key-value pairs of a Map
 ```
 let map=new Map()
map.set("a",11);
map.set("b",2);
map.set("c",5);
console.log(map.entries());
```
## Question 13.
Use the Map has() method to check if a Map contains a key.
```
let map=new Map()
map.set("a",11);
map.set("b",2);
map.set("c",5);
console.log(map.has("b"));
```
## Question 14.
Use the Map get() method to get the value associated with a key in a Map.
```
const map = new Map();
map.set('name', 'nilofar');
map.set('age', 32);
console.log(map.get('name'));
```
## Question 15.
 Use the Map set() method to add a new key-value pair to a Map.
```
const map = new Map();
map.set('name', 'nilofar');
map.set('age', 32);
console.log(map);
map.set('city','ajmer');
console.log(map.get('city'));
```









