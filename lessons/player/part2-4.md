#### Goal: Updating the Player's Position and Velocity During the Game Loop

As the game loop in Crafty is used through an event we must "bind" the event and a function to be paired with it to the target, the player entity. To do this we use Crafty's `.bind` method. The `.bind` method takes two arguments in this case:

*   The event we are binding to.
*   The function to be executed when the event takes place.

To bind the function and event pair to the entity we add the following line of code to our player:

```javascript
.bind("EnterFrame", function() {

});
```

Adding this line of code to our player should result in the code for our player looking like this:

```javascript
Crafty.e("2D, DOM, Color")
    .attr({x: 30, y: 30, w: 15, h: 15})
    .color("#ff0000")
    .bind("EnterFrame", function() {
        // Whenever the "EnterFrame" event (each game loop) occurs the code in this function will run
    });
```

To update our player's position in the game scene we need to make the function contain some game logic. First we want to add `g` to the value of the player's speed so that they appear to accelerate due to gravity, to do this we just update the variable `playerVel` inside the function:

```javascript
playerVel += g; // Adding the value of g to the player's velocity
```

Now that we have the player's velocity being affected due to gravity we want to update the *y position* of our entity. Doing this just requires us to add the player's velocity to the `y` property of the entity:

```javascript
// As the function is inside the entity, we can access its properties and methods using the keyword "this"
this.y += playerVel; 
```

With both of these statements within the "EnterFrame" events function, our player will now fall due to gravity like behaviour. *Try running it. What happens to the player? Do they stop? Do they continue falling?*


