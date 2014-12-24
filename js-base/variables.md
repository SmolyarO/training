
## Step: JavaScript Variables

### Source
- [Stoyan Stefanov - JavaScript Patterns.pdf](../master/source/Stoyan_Stefanov-JavaScript_Patterns.pdf)

### Theory

Read `CHAPTER 2: Essentials - Minimizing Globals`

### Practice

1. What are the good and bad cases of setting and naming of the variables? Write examples for each case.

You should try to avoid a large quantities of global variables. 'Cause you have chance of naming collisions.

#Bad cases are those when you are:
- Creating implied globals (without var), even in functions. You can delete it.
Example:
	implied = 'global without var';
	
- Creating globals with var. You can't delete it.
Example:
	var implied = 'global with var';

- Doing chain assignments as part of a var declaration
Example:
	var a = b = 'oops global b variable';

	
#Good cases are:
- Using var for declaration.
Example:
	window.onload = function () {
		var localVar = 'Local variable declared with var keyword';
	}

- Usin single var pattern
Example:
	var test, anotherVar, third = 3;

- Declare all vars at the beginning of a function. Don't scatter vars.


#About naming:
- I prefere to use short naming in the nearest code.
- Use understandable var names.
- Use cammelCase in var names.