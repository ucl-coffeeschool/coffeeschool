## Task B: Moving the obstacles!
### Goal: Move the obstacles every game loop!

Now that we're generating obstacles we need to move them across the scene towards the player. We can do this in the same `EnterFrame` event bind as we used for the `obstacleCounter` code.

Earlier, we gave each obstacle the `Obstacle` component: Our own component label. This component label is not part of Crafty by default and we haven't made any code that gives it behaviour. However what we can do is use it as a label to access all of the obstacle entities we made!

Crafty has a function `each` that goes through the each entity that has the given component and performs a function. We're going to use this to move every obstacle to the left each game loop. We want to place this in our most recent `EnterFrame` block:

```javascript
.bind("EnterFrame", function() {
    Crafty("Obstacle").each(function() {
        this.x -= 3;
    });

    // Obstacle generation code lives here
});
```

What should happen here is that each obstacle that we've made will move to the left 3 pixels each frame. You can try different values to change the speed of the obstacles. 

If we leave the code as it is, what happens to obstacles when they go off the screen? *They will keep moving and stay in the game, out of sight.* This means that after a while there will be *lots* of obstacles to draw and move for the player's computer, causing lag.

To fix this we can make Crafty `destroy` the object, removing it entirely. But when do we want to destroy the object? If we remove it when its `x` location is 0 what happens?

To destroy the object when it's not visible we need to remove it when its `x` position is its width, but negative. If we use an `if else` clause then the game can check if the obstacle needs to be destroyed and if not the game will move it to the left.

```javascript
.bind("EnterFrame", function() {
    Crafty("Obstacle").each(function() {
        if(this.x < -objectWidth) {
            this.destroy();
        }        
        else {
            this.x -= 3;
        }
    });

    // Let there be obstacles!
});
```

With this the game should start generating obstacles and moving them across the screen. *Why don't you try it out and see what happens?*

Now that we've got our ground and obstacles we can "pretty up" our game a smidge by setting a background colour for crafty. We can set the Crafty's background using `Crafty.background();` before we create our entities (like the ground, player and obstacles).

To set the background to a light blue colour we can add the following code after our variables but before our entities:

```javascript
Crafty.background("#ADD8E6");
```
