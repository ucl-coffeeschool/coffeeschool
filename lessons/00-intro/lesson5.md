---
title: If statements
---
_Time to complete: 5 minutes_

##Goal: Comparing values

You will want to change what your program does depending on the inputs.  In javascript, ```===``` is used to test if two values are equal., and ```!``` is the negation operator, ie ```!===``` means not equal. You can also compart the value of numbers, using the greater than ```>```  or less than ```<``` operators. The following shows the basic syntax used when doing this:

```javascript
var sound = "woof";
if (sound === "woof") {
  console.log("its a dog");
}
else {
  console.log("not a dog");
}
```

Let's try this now. Store a number in a variable, and if it is greater than 10 print ```true```, otherwise print ```false```