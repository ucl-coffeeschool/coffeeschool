### Goal: Generating the obstacle entities

Now that we've created our variables `randomHeight`, `bottomOfTopHalf` and `topOfBottomHalf` we can use these to create entities in our `newObstacle()` function.

Our obstacles are made up of two parts, the top and the bottom halves. So to create our obstacles we going to want to make both the top and bottom half as entities in our obstacle generation function!

To create our obstacle halves we use similar components to the ground and the player, although we're going to add our own component to the entities to act as a label! Let's call this new component `Obstacle`.

Using our variables we can create the top half of the obstacle. When we generate an obstacle we want to place it at the far right of the game screen so we'll use `sceneWidth` for the `x` position. We'll set the starting `y` position to 0 (the top of the screen). Our top half of the obstacle should be starting to look like this:

```javascript
Crafty.e("Obstacle, 2D, DOM, Color, Solid")
    .attr({x: sceneWidth,
        y: 0,
        ...
```

Next we need to specify the width, height and object colour! The variables we made earlier come in handy here. For our `w` property we can use our `objectWidth` variable, and for our `h` property we can use `bottomOfTopHalf` which we calculate from our `randomHeight` each time an object is made.

For our colour we can just set a dark green for now, so once we've finished filling in the properties and drawing the coloured rectangle we should end up with something similar to the following:

```javascript
Crafty.e("Obstacle, 2D, DOM, Color, Solid")
    .attr({x: sceneWidth,
        y: 0,
        w: objectWidth,
        h: bottomOfTopHalf})
    .color("#003319");
```

Now that we have the top half of our obstacle generated we can move on to the bottom half!

The bottom half is largely the same as the top half, but because it is at a different part of the vertical axis we need to use a different value for its starting `y` position and for the `h` property.

The bottom half should have its `y` starting position at the value of the `topOfBottomHalf` variable, so that we have our gap in the middle of the obstacle. We can then use our `playAreaHeight` and this starting `y` position to give the `h` property of our bottom half.

Try creating the bottom half of the obstacle now, but changing the `y` and `h` properties from the ones we used for the top half.

Hint: `h: playAreaHeight - topOfBottomHalf`

Make sure that these entities are inside your obstacle generation function!

What happens if you run the game now?

*Were any obstacles generated?*

If you notice, we haven't actually *called* our function anywhere in our code yet! This is what we'll work on in the next section, so make sure that you've understood what we're doing in our `newObstacle()` function before moving on.
