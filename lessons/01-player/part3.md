## Part 3: Refactoring 
### Goal: Swapping some hard coded values for some variables
*Time estimate for Part 3: 5 minutes*

When programming games, as well as programming in general, it is usually a bad idea to use "hard coded values" for values which might be used a number of times in different parts of your code. This is because it makes it more difficult and time consuming to change the value if you have to find every place where you used it and update it.

To avoid this problem to some extent with our game we're going to move some of the values which we have "hard coded" in our game so far to variables! That way if we need to change a value across our whole program we only have to change the variable, or if we want to use one of these values as a parameter for something else we can just use the variables name instead of finding and providing specific values.

What we're doing is called **refactoring** - this is improving readibility or extendability of our code without changing the behaviour the program (our game) shows.

The first value we're going to move to a variable is the player's size! This is because in our game we're using a square to represent the player so both the entities width and height are the same. Instead of using two values we can just use the same variable, while also using it later on (which we will). To do this let's create a variable `playerSize` at the top of our JavaScript and set it to the value we use in our player entity!

```javascript
var playerSize = 15;
```

We then want to make our player entity use the variable as a parameter in the `.attr` method, replacing the hard coded values as shown:

```javascript
    .attr({x: 30, y: 30, w: playerSize, h: playerSize})
```

With that done we can create our next set of variables. These next two variables we're making aren't values that we have written in our JavaScript yet, but are being used behind the scenes by our hidden `Crafty.init();` to give our game the width and height of its scene. The two variables we're declaring will be called `sceneWidth` and `sceneHeight` and we will set them to the values our `Crafty.init();` is using behind the scenes.

```javascript
var sceneWidth = 300, sceneHeight = 150; // Setting game dimensions as variables for reference
```

Having these variables will allow us to reference the height and width of our game scene, which will be useful later on when we use these values in other parts of our game.

*Well done! That's the first section of our game creation complete, but feel free to try playing about with the values of `g` and the value that "flapping" sets `playerVel` to.*
