## Task A: Generating Obstacles

### Goal: Create the obstacle generation function and make some variables

To create our obstacles we're going to use a function which creates a pair of entities based around a random mid point. Let's create a function and call it `newObstacle`:

```javascript
function newObstacle()
{
    // Woosh! An obstacle will be generated here later on.
}
```

Now before we write any of the code to create our entities it's worth thinking about the kind of obstacles that you want to make for this style of game. Normally there is a separated "pipe" of some kind, which acts like a wall with a hole in it at a certain point. Where the hole is located is usually fairly random so we'll start by making the location of the hole in the obstacle! Let's create a variable in our function so that we can reference our random value when creating both entities:

```javascript
function newObstacle()
{
    var randomHeight = Math.floor((Math.random() * (sceneHeight/2)) + (sceneHeight/3));
}
```

Whew... that was a long variable declaration! *Let's break it down and see what we're doing.* 

1.  We start of with `Math.floor()`, wrapping the rest of our calculation in it. This piece of code uses the JavaScript `Math` object's `floor()` method to round our calculation **down** to the nearest integer value, which is important when working with pixels!
2.  We then multiply `Math.random()` by the half the value of the `sceneHeight` variable we declared earlier. `Math.random()` again uses the `Math` object and generates a value between 0 and up to (not including) 1. This means we get a height value somewhere between 0 and half the height of the scene.
3.  Adding the value of `sceneHeight` divided by 3 gives the object some guaranteed room from the edge of the scene, so that we don't get the hole in the obstacle right at the bottom of our game scene.

Now that we have the `randomHeight` variable being created we can use it to create two variables for our obstacles: The `bottomOfTopHalf` and `topOfBottomHalf` which respectively are the values for the bottom of the top part of the obstacle and the top of the bottom half of the obstacle.

Creating the bottom of the top half we will use the `playAreaHeight` and the `randomHeight` value that we have calculated, as well as the `playerSize`.

```javascript
var bottomOfTopHalf = playAreaHeight - randomHeight;
```

This variable uses the `playAreaHeight` and makes the bottom of the top part at the point of the random height we calculated away from the ground.
 
For the top of the bottom half we will use what we just calculated and then add a multiple of the player size to size the gap. For this example I'm going to use 4, but you should try some different later on and see what happens!

```javascript
var topOfBottomHalf = bottomOfTopHalf + (4 * playerSize);
```

At this point your `newObstacle()` function should look something like this:

```javascript
function newObstacle()
{
    var randomHeight = Math.floor((Math.random() * (sceneHeight/2)) + (sceneHeight/3));
    var bottomOfTopHalf = playAreaHeight - (randomHeight - playerSize);
    var topOfBottomHalf = bottomOfTopHalf + (4 * playerSize);
}
```

The last variable we're going to make is the `objectWidth`, which we'll place at the top of our JavaScript (but below `playerSize`). For now try setting it to twice the `playerSize`.

```javascript
var objectWidth = 2 * playerSize;
```

With our object value variables set up we're now ready to create the entities.
