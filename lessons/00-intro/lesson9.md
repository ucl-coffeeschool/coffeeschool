---
title: Functions
---
_Time to complete: 5 minutes_

##Goal: write a function to double a number

Functions are a way of writing a 'sub-program' which will do a certain task, and you can then call it multiple times from the rest of the program. This allows you to avoid duplicating code, and to simplify your code and make it more understandable. 

For example, you could make a function that squares a number:
```javascript
//declare a function
function mySquare(a) {
  return a * a;
}

//call the function
console.log(mySquare(8));
console.log(mySquare(3));
```

Now write a function called ```myDouble``` to double a number and return it.
