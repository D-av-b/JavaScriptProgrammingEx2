/*
	NAME: Dav Blakeley
	DATE: 2024/01/19
	CLASS: GEX Jr
	PURPOSE: Working with Strings
*/

let l = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';

let firstName = 'Dav';
let lastName = 'Blakeley';
let age = 19;

console.log(l);

// Concatenation
let messageConcat = 'My name is ' + firstName + ' ' + lastName + 
                    ' ' + 'and my age is ' + age;

console.log(messageConcat);
console.log(l);

let msgStringLiteral = `My name is ${firstName} ${lastName} and my age is ${age}.`;
console.log(msgStringLiteral);

console.log('Length of messageConcat', messageConcat.length);
console.log('Length of msgStringLiteral', msgStringLiteral.length);

let a = 'Add a new line\n\n\nThis is a new line'
console.log(a);

let z = 'To add a new line in a JS string, use \n character'
console.log(z);
console.log(l);

let b = 'abcdefg';
console.log(b);
console.log(b.toUpperCase());
console.log(b);
b = b.toUpperCase();
console.log(b);
b = b.toLowerCase();
console.log(b);

//substr

//abcdefg
//0123456

let c = b.substr(2, 4);
console.log(c);
console.log(b);


//substring

//abcdefg
//0123456

let d = b.substring(2, 6); // ending index is not required. It says 2-6, which prints 'cdef'. you cant use 7, because it doesnt exist.
						   // in cases like these, leave the second int undefinied.
console.log(d);

// indexOf
let myName = 'Chirstopher';
let index = myName.indexOf('C');

console.log(index);