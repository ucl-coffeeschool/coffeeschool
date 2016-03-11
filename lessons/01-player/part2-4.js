// Create the variables to track player movement 
var playerVel = 0; // Stores the player's velocity
var g = 0.4;       // The constant acceleration cause by "gravity"

// Create our player's base entity
Crafty.e("2D, DOM, Color") // Specifying the components to add 
    .attr({x: 30, y: 30, w: 10, h: 10}) // Specifying the dimensions and the point to draw from
    .color("#ff0000"); // Specifying the colour of the rectangle
