// As usual you can create object using literal or constructor
	var obj1 = {};  // good
	var obj2 = new Object();  // good
// But if you pass as an argument something,  it will return an object of a Type that corresponds to the given value
	var obj3 = new Object("Hello world");
    obj3.constructor === String;    // true
	// I think it's bad way if you want object of type object.

// Properties
	.prototype  // Allows the addition of properties to all objects of type Object.

// Methods
	.assign()  // Creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object. (ECMAScript 6).
	var obj = { a: 1 };
	var copy = Object.assign({}, obj);
	
	.create()  // Creates a new object with the specified prototype object and properties.
	var o = {};  // is equivalent to:
	o = Object.create(Object.prototype);
	
	.defineProperty()  // Adds the named property described by a given descriptor to an object.
	var o = {};
	Object.defineProperty(o, 'a', {
	  value: 12,
	  writable: true,
	  enumerable: true,
	  configurable: true
	});
	o.a;  // returns 12  and we able to change it 'cause writable is true
	
	.defineProperties()  // Same as above but with many props and some different syntax.
	Object.defineProperties(o, {
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
	Object.freeze(o);  //  current object is {a: 12, b: true, c: "Hello"} and it's frozen
	o.a = 14;  // will have no effect, property 'a' won't be changed, no error will be thrown
	
	.getOwnPropertyDescriptor()  // Returns a property descriptor for a named property on an object.
	Object.getOwnPropertyDescriptor(o, 'c');  // returns {value: "Hello", writable: false, enumerable: false, configurable: false}
	
	.getOwnPropertyNames()  // Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
	Object.getOwnPropertyNames (o); // returns array ["a", "b", "c"]
	
	.getPrototypeOf()  // Returns the prototype of the specified object.
	Object.getPrototypeOf(o);  // returns {}
	var proto = {};
	var obj= Object.create(proto);
	Object.getPrototypeOf(obj) === proto; // true
	
	.isExtensible()  // Determines if extending of an object is allowed.
	Object.isExtensible(o);  // returns false 'cause we have frozen it before
	
	.isFrozen()  // Determines if an object was frozen.
	Object.isFrozen(o);  // returns true 'cause we have frozen it before
	
	.isSealed()  // Determines if an object is sealed.
	Object.isSealed(o);  // true 'cause object is sealed
	
	.keys()  // Returns an array containing the names of all of the given object's own enumerable properties.
	Object.keys(o); // returns ["a"] 'cause is enumerable, value = 12
	
	.preventExtensions()  // Prevents any extensions of an object.
	Object.preventExtensions(o);
	
	.seal()  // Prevents other code from deleting properties of an object.
	Object.seal(o); 
	
	.hasOwnProperty()  // Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
	o.hasOwnProperty('a');  // true
	
	.isPrototypeOf()  // Returns a boolean indication whether the specified object is in the prototype chain of the object this method is called upon.
	Object.prototype.isPrototypeOf(o);  // true
	
	.propertyIsEnumerable()  // Returns a boolean indicating if the internal ECMAScript DontEnum attribute is set.
	o.propertyIsEnumerable('a');  // true
	
	.toString()  // Returns a string representation of the object.
	a.toString(); // returns [object Object]  but you can override the default method
