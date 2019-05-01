/*
pop() always removes the last element of an array. 
That's where .shift() comes in. It works just like .pop(), 
except it removes the first element instead of the last.
*/

var ourArray = ["Stimpson", "J", ["cat"]];

var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
