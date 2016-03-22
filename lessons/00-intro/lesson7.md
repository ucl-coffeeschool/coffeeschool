---
title: FizzBuzz
---
_Time to complete: 5 minutes_

FizzBuzz is a a simple game where people say aloud a number starting from 1, but if it is a multiple of 3 you say Fizz or a multiple of 5 you say Buzz and if it is a multiple of both you say FizzBuzz. Try and implement this for the numbers 1 to 20.

to get you started, here is some code which will do the Fizz part

```javascript
for(var i = 1; i <= 15; i++) {
  var output = '';
  if(i%3 == 0) {
    output = 'Fizz';
  }
  else {
    output = i;
  }
  console.log(output);
}
```

Remember that you can use `if` statements *inside* other `if` statements too. Good luck!
