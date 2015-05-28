// As usual you can create object using literal or constructor
	var obj1 = {};  // good
	var obj2 = new Object();  // bad
// But if you pass as an argument something,  it will return an object of a Type that corresponds to the given value
	var obj3 = new Object("Hello world");
    obj3.constructor === String;    // true
	// I think it's bad way if you want object of type object.

// Properties
	.prototype  // Allows the addition of properties to all objects of type Object.

// Methods
	.assign()  // Creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object. (ECMAScript 6).
	var obj4 = { a: 1 };
	var copy = Object.assign({}, obj4);
	
	.create()  // Creates a new object with the specified prototype object and properties.
	var obj5 = {};  // is equivalent to:
	obj5 = Object.create(null);
	var obj6 = Object.create(obj5); // obj6 ---> obj5 ---> Object.prototype ---> null
	
	.defineProperty()  // Adds the named property described by a given descriptor to an object.
	var obj5 = {};
	Object.defineProperty(obj5, 'a', {
	  value: 12,
	  writable: true,
	  enumerable: true,
	  configurable: true
	});
	obj5.a;  // returns 12  and we able to change it 'cause writable is true
	
	.defineProperties()  // Same as above but with many props and some different syntax.
	Object.defineProperties(obj5, {
		"b": {
			value: true,
			writable: true
		},
		"c": {
			value: "Hello",
			writable: false
		}
	});
	
	.freeze()  // Freezes an object: other code can't delete or change any properties.
	Object.freeze(obj5);  //  current object is {a: 12, b: true, c: "Hello"} and it's frozen
	obj5.a = 14;  // will have no effect, property 'a' won't be changed, no error will be thrown
	
	.getOwnPropertyDescriptor()  // Returns a property descriptor for a named property on an object.
	Object.getOwnPropertyDescriptor(obj5, 'c');  // returns {value: "Hello", writable: false, enumerable: false, configurable: false}
	
	.getOwnPropertyNames()  // Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
	Object.getOwnPropertyNames (obj5); // returns array ["a", "b", "c"]
	
	.getPrototypeOf()  // Returns the prototype of the specified object.
	Object.getPrototypeOf(obj5);  // returns {}
	var proto = {};
	var obj= Object.create(proto);
	Object.getPrototypeOf(obj) === proto; // true
	
	.isExtensible()  // Determines if extending of an object is allowed.
	Object.isExtensible(obj5);  // returns false 'cause we have frozen it before
	
	.isFrozen()  // Determines if an object was frozen.
	Object.isFrozen(obj5);  // returns true 'cause we have frozen it before
	
	.isSealed()  // Determines if an object is sealed.
	Object.isSealed(obj5);  // true 'cause object is sealed
	
	.keys()  // Returns an array containing the names of all of the given object's own enumerable properties.
	Object.keys(obj5); // returns ["a"] 'cause is enumerable, value = 12
	
	.preventExtensions()  // Prevents any extensions of an object.
	Object.preventExtensions(obj5);
	
	.seal()  // Prevents other code from deleting properties of an object.
	Object.seal(obj5); 
	
	.hasOwnProperty()  // Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
	obj5.hasOwnProperty('a');  // true
	
	.isPrototypeOf()  // Returns a boolean indication whether the specified object is in the prototype chain of the object this method is called upon.
	Object.prototype.isPrototypeOf(obj5);  // true
	
	.propertyIsEnumerable()  // Returns a boolean indicating if the internal ECMAScript DontEnum attribute is set.
	obj5.propertyIsEnumerable('a');  // true
	
	.toString()  // Returns a string representation of the object.
	a.toString(); // returns [object Object]  but you can override the default method
