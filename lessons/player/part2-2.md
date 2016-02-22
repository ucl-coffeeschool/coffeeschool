### Implementing a Semblance of Gravity, Part 1
#### Goal: Keeping Track of the Players Motion

Crafty has a `Gravity` component in the library, but because we are using our own movement system we're not going to use it. Instead we will be creating a simplified semblance of gravity's behaviour. To do this we're going to create two variable at the top of our JavaScript:

```javascript
var playerVel = 0; // Used to keep track of player's vertical speed and direction.
var g = 0.5; // Creating a value which we can reference as the acceleration caused by our gravity
```

We have created `g` as a variable so that we can reference to the same value of gravity for anything in our game that is affected and only have to change the variable **once** for it to affect everything.

You may be wondering why we've given a positive value to `g`. If you recall from earlier, when referencing coordinates the origin (0,0) within the game scene is located in the *top left corner* of the scene. This means that an increase in the y position of an entity, such as our player's character will actually move it *downwards* from the player's perspective.
