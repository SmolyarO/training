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
	var numbers = [1, 2, 3, 'four'];
	numbers.length;  // 4

// Array methods
	// Mutator, these methods modify the array.
	.isArray()  // Returns true if a variable is an array, if not false.
	Array.isArray(numbers);  // true 
	
	.pop()  // Removes the last element from an array and returns that element.
	numbers.pop();  // returns 'four'. Current array [1, 2, 3].
	
	.shift()  // Removes the first element from an array and returns that element.
	numbers.shift();  // returns 1. Current array [2, 3]
	
	.push()  // Adds one or more elements to the end of an array and returns the new length of the array.
	numbers.push('four');  // returns 3. Current array [2, 3, 'four']
	
	.unshift()  // Adds one or more elements to the front of an array and returns the new length of the array.
	numbers.unshift(1);  // returns 4. Current array [1 ,2, 3, 'four']
	
	.reverse()  // Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first.
	numbers.reverse();  // returns array ["four", 3, 2, 1]
	
	.sort()  // Sorts the elements of an array in place and returns the array.
	numbers.sort();  // returns array [1, 2, 3, "four"]
	
	.splice()  // Adds and/or removes elements from an array.
	numbers.splice(3, 1, 4);  // removes 1 element from index 3, and insert 4. Returns ['four']. Current array [1 ,2, 3, 4]
	
	// Accessor, these  methods do not modify the array and return some representation of the array.
	.concat()  // Returns a new array comprised of this array joined with other array(s) and/or value(s).
	numbers.concat([5, 'six', 7]);  // returns array [1, 2, 3, "four", 5, "six", 7].
	
	.join()  // Joins all elements of an array into a string.
	numbers.join();  // returns string "1,2,3,four"
	numbers.join(' ');  // returns string "1 2 3 four"
	
	.slice()  // Extracts a section of an array and returns a new array.
	numbers.slice(1, 3);  // returns array [2, 3]
	
	.toString() // Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
	numbers.toString();  // returns string "1,2,3,four"
	
	.indexOf()  // Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
	numbers.indexOf('four');  // returns 3
	numbers.indexOf('four', -4);  // returns 3
	
	.lastIndexOf()  // Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
	numbers.push(3);  // Current array [1 ,2, 3, 'four', 3]
	numbers.lastIndexOf();  // returns 4
	
	// Iteration, these methods take as arguments functions and some of them can modify the array.
	.forEach()  // Calls a function for each element in the array.
	numbers = [1, 2, 3];
	var fn = function(element, index, array) {
		return array[index] *=2;
	}
	numbers.forEach(fn);  // Current array [2, 4, 6]
	
	.every()  // Returns true if every element in this array satisfies the provided testing function.
	var fn = function(element, index, array) {
		return isFinite(array[index]) == true;
	}
	numbers.every(fn); // returns true
	numbers.push('seven');
	numbers.every(fn); // returns false
	
	.some()  // Returns true if at least one element in this array satisfies the provided testing function.
	.filter()  // Creates a new array with all of the elements of this array for which the provided filtering function returns true.
	.map()  // Creates a new array with the results of calling a provided function on every element in this array.
	.reduce()  // Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
	.reduceRight()  // Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.


