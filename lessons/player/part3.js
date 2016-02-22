var playerVel = 0; // Variable to store the vertical speed and direction of the player - their vertical velocity.
var g = 1.0; // Variable to store the constant acceleration due to our gravity system - positive because y = 0 is at the top of the screen.
    
Crafty.e("2D, DOM, Color") // Creates an entity with 2D, DOM and Color components.
    .attr({x: 30, y: 30, w: 15, h: 15}) // Draws from (30,30) with a width and height of 15px.
    .color("#ff00000"); // Creates a red rectangle.
