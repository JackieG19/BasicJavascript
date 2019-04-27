/*
Another way to change the data in an array is with the .pop() function.

.pop() is used to "pop" a value off of the end of an array. 
You can store this "popped off" value by assigning it to a variable. 

In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.
*/

var threeArr = [1, 4, 6];

var oneDown = threeArr.pop();

console.log(oneDown);

console.log(threeArr);

// oneDown now equals 6, and threeArr now equals [1, 4]

