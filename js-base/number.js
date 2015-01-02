// Also as a String you can create Number through non-constructor context or basic constructor.
	var number = 25;  //  Number literal. It implicitly calls Number().
	var num = Number('23');  //  Without new operator to perform a type conversion
	var numObj = new Number(30);  // Number object
// Usually I use literal style. Create Number objects explicitly needed rarely.
	Number("999");  //good
	new Number(666);  //not good

// Static properties MAX_VALUE, MIN_VALUE
	Number.MAX_VALUE;  // 1.7976931348623157e+308
	Number.MIN_VALUE;  // 5e-324

// Number methods
	var num_meth = 12345.6789;
	num_meth.toString();  // returns string 12345.6789
	num_meth.toExponential();  // returns string "1.23456789e+4" representing a number in exponential notation
	num_meth.toFixed();  // number will be rounded and have no fractional part; returns 12346
	num_meth.toPrecision();  // returns string "12345.6789" representing the Number to the specified precision
//Difference between .toFixed() and toPrecision()
// .toFixed() you set number of digits after dot
// .toPrecision() you set number of digits at all
	
// Number properties
	Number.MAX_VALUE  // The largest positive representable number
	Number.MIN_VALUE  // The smallest positive representable number - that is, the positive number closest to zero
	Number.NaN  // Special "not a number" value. When Number('2 3'); can't perform a type conversion.
	Number.NEGATIVE_INFINITY  // Special value representing negative infinity; returned on overflow.
	Number.POSITIVE_INFINITY  // Special value representing infinity; returned on overflow.