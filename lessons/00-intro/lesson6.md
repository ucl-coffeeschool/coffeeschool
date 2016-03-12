---
title: Loops
---
_Time to complete: 5 minutes_

Another commonly used construct is a loop, to repeat code multiple times. For example:

```javascript
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```
will output the numbers 0 to 9.

FizzBuzz
--------

FizzBuzz is a a simple game where people say aloud a number starting from 1, but if it is a multiple of 3 you say Fizz or a multiple of 5 you say Buzz and if it is a multiple of both you say FizzBuzz. Try and implement this for the numbers 1 to 20.

to get you started, here is some code which will do the Fizz part

```javascript
for(var i = 1; i <= 15; i++) {
  if(i%3 == 0) {
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}
```

Remember that you can use `if` statements *inside* other `if` statements too. Good luck!
