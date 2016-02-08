// Global variables - Game settings etc.
var playerSize = 20;
var sceneWidth = 500, sceneHeight = 350, groundHeight = 30;
var objectWidth = 2 * playerSize;
var readyForJump = true;
var obstacleCounter = 0, jumpCounter = 10;
var g = 1.0, playerVel = 0;
var score = 0;
// Scene
Crafty.init(sceneWidth, sceneHeight, document.getElementById("game"));
// Player
var Player = Crafty.e("Player, Collision, 2D, DOM, Color, Keyboard")
                .attr({x: 30, y: 50, w: playerSize, h: playerSize})
                .checkHits("Solid") // Checks for hits
                .color("#ff0000")
                // Logic for motion
                .bind("EnterFrame", function() {
                  if (this.y < 0) {
                    playerVel = g;
                    this.y += playerVel;
                  }
                  else {
                    playerVel += g;
                    this.y += playerVel;
                  }
                })
                // Logic for space key down event
                .bind("KeyDown", function(event) {
                  if(event.key == Crafty.keys.SPACE) {
                    if(jumpCounter >= 10) {
                      playerVel = -10;
                    }
                  }
                })
                // Logic for collisions with 'Solid' objects
                .bind("HitOn", function() {
                  this.y = (sceneHeight - groundHeight - playerSize);
                  pause();
                });
// Score
var ScoreDisp = Crafty.e("2D, DOM, Text")
                  .attr({x: 5, y: 10})
                  .text("Score: " + score)
                  .textFont({size: '14px', weight:'bold'});
// Ground
var Ground = Crafty.e("Solid, Collision, 2D, Canvas, Color")
                .attr({x: 0, y: 320, w: 500, h: groundHeight})
                .color("#00ff00");


// Logic every frame
Crafty.bind("EnterFrame", function() {
  // Moves each entity with the obstacle label
  Crafty("Obstacle").each(function() {
    if(this.x < (0 - objectWidth)) {
      score += 0.5;
      this.destroy();
    }
    else {
    this.x -= 3;
    }
  });

  // Counter used to check when to spawn a new obstacle
  if(obstacleCounter > 100) {
    obstacleCounter = 0;
    newObstacle();
  }

  ScoreDisp.text("Score: " + score);
  // Updates the frame counters
  obstacleCounter++;
  jumpCounter++;
});

// Function to generate obstacles
function newObstacle()
{
// Variables used for obstacle generation
var randomHeight = Math.floor((Math.random() * (sceneHeight/2)) + (sceneHeight/3));
var bottomOfTopHalf = (sceneHeight - groundHeight - (randomHeight - playerSize));
var topOfBottomHalf = bottomOfTopHalf + (4*playerSize);

// Top half of the pipe
Crafty.e("Obstacle, 2D, Canvas, Color, Solid")
    .attr({x: sceneWidth,
          y: 0,
          w: objectWidth,
          h: bottomOfTopHalf})
    .color("#003319");
// Bottom half of the pipe
Crafty.e("Obstacle, 2D, Canvas, Color, Solid")
    .attr({x: sceneWidth,
          y: topOfBottomHalf,
          w: objectWidth,
          h: sceneHeight - groundHeight - topOfBottomHalf})
        .color("#003319");

};
