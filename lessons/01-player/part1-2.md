## Part 1: Drawing the Player
*Time estimate for Part 1: 5 minutes*
### Goal: Draw the Player's avatar

To create the base entity for our player we use the following code:

```javascript
Crafty.e("2D, DOM, Color");
```

This uses Crafty's `.e` method to create an entity with the components "2D", "DOM" and "Color". Adding components to an entity in Crafty enables you to give it extra behaviour or functionality. 2D allows us to place the entity in the game's view, while Color is used to draw coloured rectangles.

To create the rectangle on the screen we extend the entity with the following code:

```javascript
Crafty.e("2D, DOM, Color") // Creating the entity and adding components
    .attr({x: 30, y: 30, w: 15, h: 15}) // Specifying point to draw from (x,y) and dimensions to use 
    .color("#ff0000"); // Specifying the colour and drawing the rectangle
```

This produces a *red* rectangle, drawn 30 pixels down and 30 pixels across from the *top-left* of the scene. We have specified the rectangle's width and height as 15 pixels.
