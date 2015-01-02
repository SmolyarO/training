
## Step: Expressions and Operators

### Source
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

### Theory
 - Arithmetic operators
 - Unary operators
 - Equality operators
 - Relational operators
 - Binary logical operators
 - Assignment operators
 - Increment and decrement
 - Ternary operator

### Practice

1. What are the expressions and operators in JavaScript? 
	## We have Primary expressions and Left-hand-side expressions.
	### Primary are:
		- this
		Example:
		console.log(this === window);
		
		- function
		Example:
		var fn = function (msg) {
			alert(msg);
		}
		
		- [] array init
		Example:
		var arr = [1, 2, 3,];
		
		- [] object literal
		Example:
		var obj = {first: 1, second: "2-nd"};
		
		- /\w+/i
		Example:
		var re = /^[\w\S]+@[\w\S]+\.[\w]{2,4}$/i; //mail check
		
		- () grouping
		Example:
		var sum = 2 * (2 + 2)
		
	### Left-hand-side expressions are:
		- Property accessors
		Example:
		document.createElement('p');
		
		- new (creates new instance of a Constructor)
		Example:
		function Test() {};
		var test = new Test();
		
		- super (calls the parent constructor)
		Example:
		
	## Groups of operators are listed above
	### Increment and decrement
		- Postfix increment & decrement, prefix ind & dec
		Example:
		
			// Postfix 
			var x = 3;
			y = x++; // y = 3, x = 4

			// Prefix
			var a = 2;
			b = ++a; // a = 3, b = 3
		
	### Unary operators
		- delete, void, typeof, unary plus +, unary negation -, bitwise not ~, logical not !
		Example:
			prop = 2; //noooot good
			function eq(arg) {
				if (!(typeof arg == 'string')) {
					delete prop;
				}
			};
			void (function () {
				eq(prop);
			})();
	### Arithmetic
		- + - / * %
		Example:
		 console.log((2.03%2).toFixed(2));
		
	### Relational
		- in, instanceof, <, <=, >, >=
		Example:
		    function C() {};
				var obj = new C();
				obj.test = 'test string';
				function rel () {
				if (obj instanceof C && 'test' in obj) {
					alert('oh yeah');
				}
			};
			rel();
	
	### Equality
		- ==, !=, ===, !==
		Example:
			if (5 != 6) {
				alert('Incredible!');
			}
	
	### Binary logical
		- &&, ||
		Example:
			var blo = true && true; //returns true
			var blo2 = false || true; //returns true
	
	### Conditional (ternary) operator
		- (condition ? ifTrue : ifFalse)
		Example:
			var time = new Date();
			var greating = "Good" + ((time.getHours() > 17) ? ' evening.' : ' day.');
	
	### Assignment
		- =, *=, /=, %=, +=, -=, <<=, >>=, >>>=, &=, ^=, |=
		Example:
			var a = 'My';
			a += ' name';
			a -= ' name'; / returns NaN, you can use -= with Number

2. What are the good and bad cases of using these expressions and operators? Write examples for each case.

	- Use of operators not for their intended purpose or obstruct code by them
	Example:
		(foo != 0); just use (foo);
		
	- Some operators are not usefull
	Example:
		//do not use === if you want compare objects
		var x = {};
		var y = {};
		var z = x;
		x === y; // => false  identical but different location in memory
		x === z; // => true  'cause it's link to the same location in memory
		//you have to create your "equals" method or something
		//or try this, but it's very primitive and it's problematic for a variety of reasons
		JSON.stringify(x)===JSON.stringify(y);