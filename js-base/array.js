// Arrays are list-like objects whose prototype has different methods
// You can create Array through literal or constructor context.
	var arr1 = [1, 2, 3, 4];  // good
	var arr2 = new Array();  // not very good
	arr2[12] = 'some thing'; // also bad if you don't know previous index
	
// If you want to use associative arrays you can use Array() constructor
	var arr3 = new Array();
	arr3['one'] = 'maybe one';
// In any case, you can use plain objects instead, although doing so comes with its own caveats.
// good post about it http://www.less-broken.com/blog/2010/12/lightweight-javascript-dictionaries.html

// Array properties
	.length  // Reflects the number of elements in an array

// Array methods
	// Mutator
	.isArray()  // Returns true if a variable is an array, if not false.
	.pop()  // Removes the last element from an array and returns that element.
	.shift()  // Removes the first element from an array and returns that element.
	.push()  // Adds one or more elements to the end of an array and returns the new length of the array.
	.unshift()  // Adds one or more elements to the front of an array and returns the new length of the array.
	.reverse()  // Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first.
	.sort()  // Sorts the elements of an array in place and returns the array.
	.splice()  // Adds and/or removes elements from an array.
	
	// Accessor
	.concat()  // Returns a new array comprised of this array joined with other array(s) and/or value(s).
	.join()  // Joins all elements of an array into a string.
	.slice()  // Extracts a section of an array and returns a new array.
	.toString() // Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
	.indexOf()  // Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
	.lastIndexOf()  // Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
	
	// Iteration
	