// Declare String Variables

var firstName = "Alan";
var lastName = "Turing";

myFirstName = "jack";
 myLastName = "Theo";
 
 /* output: jack, Theo */
 
 
 // Escaping Literal Quotes in Strings
 var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
 /* output: "I am a "double quoted" string inside "double quotes". */
 
 
 // Quoting Strings with Single Quotes
 var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
 
 
 // Escape Sequences in Strings
 var myStr = "FirstLine\n\\SecondLine\\\rThirdLine"; 
 
 
 // Concatenating Strings with Plus Operator
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the start." + " This is the end.";

// Concatenating Strings with the Plus Equals Operator

var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. This is the second sentence.";
myStr += "";


// Constructing Strings with Variables

var ourName = "Free Code Camp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Jackie";
var myStr = "My name is " + myName + " and I am swell!"; 

/* output: myStr = "My name is Jackie and I am swell!"*/


// Appending Variables to Strings 

var anAdjective = "awesome!";
var ourStr = "Free Code Camp is ";
ourStr += anAdjective;

var someAdjective = "fun and exciting";
var myStr = "Learning to code is ";
myStr += someAdjective;

/* output: myStr = "Learning to code is fun and exciting" */


// Find the Length of a String

var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

/* output: 8 */


// Understand String Immutability

var myStr = "Hello World";
myStr = "Hello World"; 




