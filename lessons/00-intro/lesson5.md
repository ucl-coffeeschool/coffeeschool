---
title: If statements
---
_Time to complete: 5 minutes_

You will want to change what your program does depending on the inputs.  In javascript, ```===``` is used to test if two values are equal., and ```!``` is the negation operator, ie ```!===``` means not equal. The following shows the basic syntax used when doing this:

```javascript
var sound = "woof";
if (sound === "woof") {
  console.log("its a dog");
}
else {
  console.log("not a dog");
}
```

Let's try this now. We're going to give you a list of numbers, `numbers`, and if they are **greater than 10** then return `true`, otherwise return `false`. Good luck!

P.S.: We're using a loop to go through each number. You can access the current number with `numbers[number]`.
