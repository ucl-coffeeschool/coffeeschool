# Game Lesson One
## Creating the Player

If we want to have a flappy bird style game then we need a representation of the player to clear the obstacles. For now, lets keep the graphics simple and focus on the key points of the game. 

With the Javascript game framework we're using, Crafty, the main component in a game is an entity. The player's avatar, obstacles, game characters and effects can be created as entities.

### Drawing the Player

To draw our player we're going to use an entity, creating the base entity with the following line of code:

```javascript
Crafty.e("2D, DOM, Color");
```

We use Crafty to create an entity through the `.e` method and then add the components 2D, DOM and Color to it. Components are parts of Crafty which you add to entities to add functionality or behaviour to them. The 2D component is required for any entity which will be placed in the view of the game, while the Color component is used to draw coloured rectangles. The DOM component places the entity inside the page's Document Object Model.

To create the rectangle on the screen we extend the entity by setting the component properties like so:

```javascript
Crafty.e("2D, DOM, Color")
    .attr({x: 30, y: 30, w: 15, h: 15})
    .color("#ff0000");
```

When using the `.attr` method we set the (x,y) coordinates (in pixels) at which to draw the entity as well as the width and height (in pixels) of the entity to draw. Coordinates go from the *top-left* corner of the games view. The `.color` method is used to draw a rectangle of the specified colour using the attributes specified with `.attr`.

As a result this will produce a red rectangle with width and height of 15 pixels, located 30 pixels down and 30 pixels across from the top left of the game scene.
