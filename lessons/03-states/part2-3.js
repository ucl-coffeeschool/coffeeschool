// Creating environment variables
var playerSize = 10;
var sceneWidth = 300, sceneHeight = 150;
var groundHeight = 10;
var playAreaHeight = (sceneHeight - groundHeight);
// Create the variables to track player movement
var playerVel = 0; // Stores the player's velocity
var g = 0.4;       // The constant acceleration cause by "gravity"
// Object width!
var objectWidth = 2 * playerSize;
// Obstacle Counter
var obstacleCounter = 0;
// Score tracking variable
var score = 0;

// Sets the background colour
Crafty.background("#ADD8E6");

Crafty.defineScene("Start", function() {
  // Introductory text
  Crafty.e("2D, DOM, Text")
      .attr({x: sceneWidth/2, y: sceneHeight/2, w: 100, h: 20})
      .text("Press 'space' to begin")
      .css({"text-align":"center"})

  // "Dummy" player
  Crafty.e("2D, DOM, Color")
      .attr({x: 30,y: 30, w: playerSize, h: playerSize})
      .color("#ff0000")
      // Handle any keypress events
      .bind("KeyDown", function(event) {
          // If the key pressed is the space bar then move to the "Game" scene
          if(event.key == Crafty.keys.SPACE) {
              Crafty.enterScene("Game");
          }
      });

  // Dummy ground
  Crafty.e("2D, DOM, Color")
      .attr({x: 0, y: playAreaHeight, w: sceneWidth, h: groundHeight})
      .color("#00ff00");
});

// Enter the start scene
Crafty.enterScene("Start");

// Our "Game Over" screen
Crafty.defineScene("GameOver", function(){
    // The text to display the game over message
    Crafty.e("2D, DOM, Text")
      .attr({x: sceneWidth/2, y: sceneHeight/2, w: 100, h: 20})
      .text("Game Over! Your score was: " + score)
      .textFont({size: '14px', weight: 'bold'});

    // Dummy ground
    Crafty.e("2D, DOM, Color")
      .attr({x: 0, y: playAreaHeight, w: sceneWidth, h: groundHeight})
      .color("#00ff00");
});

Crafty.defineScene("Game", function() {

  score = 0;

  // Text displaying players score!
  Crafty.e("2D, DOM, Text")
    .attr({x: 5,
           y: 10,
           w: 100,
           h: 20})
    .text("Score: " + score)
    .textFont({size: '14px', weight: 'bold'})
    .bind("EnterFrame", function() {
      this.text("Score: " + score);
    });

  // Create the ground!
  Crafty.e("Solid, 2D, DOM, Color")
      .attr({x: 0,
             y: playAreaHeight,
             w: sceneWidth,
             h: groundHeight})
      .color("#00ff00");

  // Create our player's base entity
  Crafty.e("Collision, 2D, DOM, Color") // Specifying the components to add
      .attr({x: 30, y: 30, w: playerSize, h: playerSize}) // Specifying the dimensions and the point to draw from
      .checkHits("Solid")
      .color("#ff0000") // Specifying the colour of the rectangle
      .bind("EnterFrame", function() { // Binds the "EnterFrame" event to the entity
          playerVel += g; // Adds the "gravitational acceleration" to the player's velocity
          this.y += playerVel; // Change the player entities y position based on the player velocity
      })
      .bind("KeyDown", function(event) { // Binds the "KeyDown" event to our player entity
          if(event.key == Crafty.keys.SPACE){ // If the key is the spacebar then "flap"
              playerVel = -5; // Sets the player's speed and direction to go upwards
          }
      })
      .bind("HitOn", function() {
        Crafty.enterScene("GameOver");
      })
      .bind("EnterFrame", function() {
          Crafty("Obstacle").each(function() {
              if(this.x < -objectWidth) {
                  score += 0.5; // Increase the score!
                  this.destroy();
              }
              else {
                  this.x -= 3;
              }

          });

          if(obstacleCounter > 100){
              obstacleCounter = 0;
              newObstacle();
          }

          obstacleCounter++;

      });
});


function newObstacle()
{
    var randomHeight = Math.floor((Math.random() * (sceneHeight/2)) + (sceneHeight/3));
    var bottomOfTopHalf = playAreaHeight - randomHeight;
    var topOfBottomHalf = bottomOfTopHalf + (4 * playerSize);

    // Create the top half of the pipe
    Crafty.e("Obstacle, 2D, DOM, Color, Solid")
        .attr({x: sceneWidth,
               y: 0,
               w: objectWidth,
               h: bottomOfTopHalf})
        .color("#003319");

    // Create the bottom half of the pipe
    Crafty.e("Obstacle, 2D, DOM, Color, Solid")
        .attr({x: sceneWidth,
               y: topOfBottomHalf,
               w: objectWidth,
               h: playAreaHeight - topOfBottomHalf})
        .color("#003319");
}
