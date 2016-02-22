/*
 We want to place the variable to control the player's motion here at the head of the file.
*/

Crafty.e("2D, DOM, Color") // Creates an entity with 2D, DOM and Color components.
    .attr({x: 30, y: 30, w: 15, h: 15}) // Draws from (30,30) with a width and height of 15px.
    .color("#ff00000"); // Creates a red rectangle.
