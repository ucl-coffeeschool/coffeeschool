# Game Lesson One
## Creating the Player

Now that we've drawn the player we'll want to think about giving it movement. In Flappy Bird and its games there are generally **two** types of movement:

*   Movement instigated by player input - In this case when the player "flaps".
*   Movement determined by environment or game logic - In this case the constant fall to ground from a gravity-esque behaviour.

Let's start by tackling the game behaviour which makes it appear as though gravity is causing the player to fall to the ground.

### Implementing a Semblance of Gravity

#### Keeping Track of the Players Motion 

Crafty actually has a `Gravity` component in the library, but because we will be making our own movement system we're not going to use it. Instead, we will be creating a basic semblance of gravity's behaviour. To do this we'll create two variables, `playerVel` and `g`, placing them at the top of our Javascript.

```javascript
var playerVel = 0;
``` 

We create this to keep track of the player's vertical velocity - the direction and speed of their movement. We are only concerning ourselves with the vertical motion of the player in our game and we'll explain why when we begin to create the obstacles to fly through! 
 
```javascript
var g = 1.0;
```

We create g as a way to reference a value to accelerate any entities with our "gravity" acting on them. This way if we were to have more than one entity in our game be affected by the gravity behaviour then we *won't need to change the value in every place we have used it and can just change the variable `g`*.

Now, you may have noticed that we have given `g` a positive value. *Surely this value should be negative, right?* If you recall, the position of the coordinates (0,0) is located in the *top-left* corner of our game. This means that moving an entity, such as our player's character, by a positive amount in the vertical direction will actually move it *down* from the player's perspective.

Once you've added these variables in to the game you're ready to make our basic gravity system pull the player down to the ground, so add in both `playerVel` and `g` to your code at the top of the Javascript (above the player entity) and move on to the next lesson.
