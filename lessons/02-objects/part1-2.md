## Part 1: Creating the Ground
*Time estimate for Part 1: 5 minutes*
### Goal: Draw the ground

To create our ground we're going to use a rectangular entity similar in a similar vein to the base player avatar we used, however we can replace the `DOM` component with the `Canvas` one and make use of the scene variables that we created at the end of the last lesson.

The code to draw the ground entity is the following, and we'll place it before our code for the player:

```javascript
Crafty.e("2D, Canvas, Color") // Adding the 2D, Canvas and Color components
    .attr({x: 0,
           y: playAreaHeight,// We haven't yet declared this value.
           w: sceneWidth,    // This was declared earlier when getting rid of "hard coded" values
           h: groundHeight}) // Bear with us on these undeclared variables!
    .color("#00ff00");
```

The entity which we have written code for isn't yet valid, as we haven't declared the `playeAreaHeight` or `groundHeight` variables yet. We should fix this and create them so that our code is valid.

Let's place the groundHeight and playAreaHeight variables at the top of our JavaScript along with the other game and scene variables. For our ground height we're going to use a value of 10 pixels (but feel free to play about with this later!).

```javascript
var groundHeight = 10;
```

Now the other variable, the `playAreaHeight`, is the area between the top of the ground and the top of the game scene. So to set the `playAreaHeight` we're going to use our value for `groundHeight` which means we must place it after the `groundHeight` variable, resulting in something like this:

```javascript
var groundHeight = 10;
var playAreaHeight = (sceneHeight - groundHeight);
```

You may have noticed that while our ground entity starts with an x coordinate of 0, we set it's y coordinate to playAreaHeight. *This is a result of the coordinate system having (0,0) as the top left corner of the scene, as mentioned earlier*.

We've made the values of the attributes for the ground variables because as you'll see shortly we want to reuse these values when creating our obstacles! (That way we can be lazy if we need to make a change to a value later and only change it once. **The best kind of lazy**).
