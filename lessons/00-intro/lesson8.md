---
title: Arrays
---
_Time to complete: 5 minutes_

##Goal: store numbers in an array and loop through it

Arrays are a way of storing a list of items as a single variable. The syntax for creating an array is ```var numbers = [4,65,2,25,-5,3];```
You can then access items of an array with ```numbers[i]``` where i is an integer and you start counting from 0, ie numbers[2] would give 2. You can also loop through arrays in a special way, ie doing
```javascript 
var numbers = [4, 34, 23, 7, 34, -10];

for (var number in numbers) {
    //do logic, eg print the number
    console.log(number);
}
```


Now loop through the numbers [4, 34, 23, 7, 34, -10] and print true if they are greater than 10, otherwise print false.