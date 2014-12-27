// You can create string through literal or basic constructor.
	var s_prim = 'foo';  //primitive string
	var s_obj = new String('bar');  //string object
	
// In my opinion it's not a good idea to use string object.
// because you can do this:
	s_obj.add = 'property';
// but I don't know why you need this
// also for example primitives passed to eval() are treated as source code.
// String must be a string so this is a good way:
	var str = 'string';

// Methods in String are: .charAt(), .concat(), .indexOf(), .lastIndexOf(), .slice(), .split(), .substr(), .toLowerCase(), .toUpperCase(), .trim(), .valueOf()

// .charAt() returns the specified character from a string.
	str.charAt(2);  // r
	
// .concat() combines the text of two or more strings and returns a new string.
	var name = 'Ostap';
	name.concat(' Smolyar');  // Ostap Smolyar
	
// .indexOf() returns the index within the calling String of the first occurrence of the specified value.
	var gl = 'Global Logic';
	gl.indexOf('Logic');  // 7

// .lastIndexOf() the same as above but returns last occurrence of the specified value.
	gl.lastIndexOf('o');  // 8  'cause also we have "o" at position 2

// .slice() extracts a section of a string and returns a new string.
	var str1 = 'The morning is upon us.';
	var str2 = str1.slice(4, -2);  // return "morning is upon u" so slice starts at 4-th char "m" and ends at 2-nd char from the end.

// .split() splits a String object into an array of strings by separating the string into substrings
	var months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
	months.split(',');  // returns array of months

//  .substr() returns the characters in a string beginning at the specified location through the specified number of characters.
	var sb_str = 'Some interesting text';
	sb_str.substr(5, 11); // retutns string "interesting"

//  .toLowerCase(), .toUpperCase() returns the value of the string converted to lowercase and to uppercase
	'ALPHABET'.toLowerCase();  // "alphabet"
	'alphabet'.toUpperCase();  // "ALPHABET"
// if you want Capitalize Every Word In String you can use something like this:
	function toTitleCase(str)
	{
		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

// .trim() removes whitespace from both ends of a string
	var orig = '   foo  ';
	orig.trim(); // returns 'foo'

// .valueOf() returns the primitive value of a String object .valueOf() is equivalent to String.prototype.toString()
	var x = new String('Hello world');
	x.valueOf(); // Displays primitive string 'Hello world'


//Properties are: .length
	str.length;  // returns 6
	