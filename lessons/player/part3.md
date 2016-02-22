# Game Lesson One
## Creating the Player

### Implementing a Semblance of Gravity

With our variables in place to keep track of and affect the players motion we can now cause the player to move as a result of the values of these variables. To constantly update the speed, direction of movement and position of our player we need to know about "game loops". 

#### Game Engines and Game Loops

In general, games engines have a game loop that runs every frame that is rendered during a games running time. In some engines there will be just one game loop, where both the rendering (drawing) of objects on the screen and the logic of the game takes place. Other engines split the rendering and logic into separate loops so that if rendering is slowed or frames are skipped then the game logic isn't slowed along with it. Advanced engines often take an approach of making each separate object in a game an entity in its own right, with it's logic fairly isolated from everything else, paired with game loops.

Crafty follows an entity model as described earlier, but also uses a game loop. The game loop in Crafty is the event "EnterFrame", which you can bind to the whole of Crafty or just a single entity. This lets you keep your codes concerns separated (so only the player entity has to worry about its behaviour, and the obstacles only have to worry about theirs).  

#### Updating the Player's Position and Velocity During the Game Loop 

As the game loop in Crafty is used through an event we must "bind" the event and a function paired to the event to the target, in this case the player entity. To do this we use Crafty's `.bind` method. The `.bind` method takes two arguments in this case, the event we are binding to and the function to be bound to that event.

To use the `.bind` method on our player we extend it in a similar manner before, so that we have the following line of code:

```javascript
Crafty.e("2D, DOM, Color")
    .attr({x: 30, y: 30, w: 15, h: 15})
    .color("#ff0000")
    .bind("EnterFrame", function() {
    
    });
```
