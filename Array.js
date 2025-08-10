/*const myArr = [1, 2, 3, 4, 5];

console.log(myArr[3]); // Output: 4
console.log(myArr.length); // Output: 5

// Adding an element to the end of the array
 
myArr.push(6);
console.log(myArr); // Output: [1, 2, 3, 4, 5, 6]

// Removing the last element from the array
myArr.pop();
console.log(myArr); // Output: [1, 2, 3, 4, 5]

// Adding an element to the beginning of the array

myArr.unshift(0);
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5]

// Removing the first element from the array

myArr.shift();
console.log(myArr); // Output: [1, 2, 3, 4, 5]

let myArr2 = new Array(1,2,3,4,5,6);
console.log(myArr2); // Output: [1, 2, 3, 4, 5, 6]

// Question Array
console.log(myArr2.includes(3)); // Output: true
console.log(myArr2.indexOf(3)); // Output: 2

// Reversing the array
myArr2.reverse();
console.log(myArr2); // Output: [6, 5, 4,3, 2, 1]

//Change Type of Array
console.log(myArr2.join()); // Output: "6,5,4,3,2,1"
console.log(typeof myArr2.join()); // Output: "string"

// Slice and Splice
myArr2 = [1, 2, 3, 4, 5, 6];

console.log(myArr2.slice(1, 4));
 // Output: [2, 3, 4] Original Array remains unchanged
console.log(myArr2.splice(1, 2));
 // Output: [2,3]  Original Array is modified
console.log(myArr2); // Output: [1, 4, 5, 6]
*/

// Array Part 2

const Marvel = ['Ironman', 'Thor', 'Hulk', 'Black Widow', 'Captain America'];

const DC = ['Superman', 'Batman', 'Wonder', 'Aquaman', 'Flash'];

// Merging two arrays (Spread Operator)
// Using the spread operator to merge two arrays
const superheroes = [...Marvel, ...DC];
console.log(superheroes); // Output: ['Ironman', 'Thor', 'Hulk', 'Black Widow', 'Captain America', 'Superman', 'Batman', 'Wonder', 'Aquaman', 'Flash']

// IsArray ,From, Of
/*console.log(Array.isArray(superheroes)); // Output: true
console.log(Array.from("Sumit")); // Output: ['S', 'u', 'm', 'i', 't']
let sc1 = 100;
let sc2 = 200;
let sc3 = 300;
let sc4 = 444;
let sc5 = 555;
console.log(Array.of(sc1,sc2,sc3,sc4,sc5)); // Output: [100, 200, 300, 444, 555]*/

const another_array = [2,3,4,5,6,6,[7,8,9,4,5,6],[4,5,6,8],[1,2,3,4]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Sumit"));
console.log(Array.from("Sumit"));