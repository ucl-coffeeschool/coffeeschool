### Task B: Letting the Player "flap"
#### Goal: Getting user input and changing a variable as a result

Similar to how Crafty has the `EnterFrame` event, there is an event for a key being pressed `KeyDown`. Crafty also has a number of other events, some of which we'll be using later in our game. However, to include the `KeyDown` event we need to give the entity using it the `Keyboard` component.

As we did when creating the gravitational behaviour we will extend our player entity with another bind. To do this we place it in our code in this spot:

```javascript
.bind("EnterFrame", function() {
    // This is where our "gravity" code is
})
// Here we add another binding between the ending ; and the end of the "EnterFrame" bind
.bind("KeyDown", function(event) {
    // We will place our keyboard code here
}); // Remember to move the semicolon!
```

This bind means that the function declared in it is run whenever a `KeyDown` event is triggered. When an event is triggered the event object is passed to it, which allows us to access the `key` property of the event so that we can check which key was pressed.

To check the key pressed we will write an if statement within the `KeyDown` events function block. So to check if the key pressed was the space bar we would place the following into the function block:

```javascript
.bind("KeyDown", function(event) {
    // Where we place our code
    if(event.key == Crafty.keys.SPACE) {
        // Game logic goes here
    }
});
```

This code checks if the `event` passed to the function has the value of the spacebar for it's `key` property. 

To complete the jumping ability of the player we need to make the input do something! *Try setting the variable `playerVel` to -5 inside the if statement.*

**Once you've added in your input try it out by hitting the "update" button.**
*If it falls too fast to try it out have a go at changing the value of g!*
