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