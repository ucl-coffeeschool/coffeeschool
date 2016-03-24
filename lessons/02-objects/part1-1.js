// Creating environment variables
var playerSize = 10;
var sceneWidth = 300, sceneHeight = 150;
// Create the variables to track player movement
var playerVel = 0; // Stores the player's velocity
var g = 0.4;       // The constant acceleration cause by "gravity"

// Create our player's base entity
Crafty.e("2D, DOM, Color") // Specifying the components to add
    .attr({x: 30, y: 30, w: playerSize, h: playerSize}) // Specifying the dimensions and the point to draw from
    .color("#ff0000") // Specifying the colour of the rectangle
    .bind("EnterFrame", function() { // Binds the "EnterFrame" event to the entity
        if(this.y < 0) {
          playerVel = g; // Prevent the player from going above the game screen
        }
        else {
          playerVel += g; // Adds the "gravitational acceleration" to the player's velocity
        }

        this.y += playerVel; // Change the player entities y position based on the player velocity
    })
    .bind("KeyDown", function(event) { // Binds the "KeyDown" event to our player entity
        if(event.key == Crafty.keys.SPACE){ // If the key is the spacebar then "flap"
            playerVel = -5; // Sets the player's speed and direction to go upwards
        }
    });
