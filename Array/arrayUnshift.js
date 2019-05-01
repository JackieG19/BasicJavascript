/*
.unshift() works exactly like .push(), 
but instead of adding the element at the end of the array, 

unshift() adds the element at the beginning of the array.
*/

var ourArray = ["Stimpson", "J", "cat"];

ourArray.shift(); 
// ourArray now equals ["J", "cat"]

ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]
