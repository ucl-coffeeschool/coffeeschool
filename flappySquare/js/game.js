// Global variables - Game settings etc.
var playerSize = 20;
var sceneWidth = 500, sceneHeight = 350, groundHeight = 30;
var objectWidth = 2 * playerSize;
var obstacleCounter = 0; 
var g = 1.0;
var score = 0;

Crafty.init(sceneWidth, sceneHeight, document.getElementById("game"));

Crafty.background("#ADD8E6");

// Start Scene
Crafty.defineScene("Start", function() {
    Crafty.e("2D, DOM, Text")
        .attr({x: sceneWidth/2, y: sceneHeight/2, w: 100, h: 20})
        .text("Press 'space' to begin")
        .css({"text-align":"center"});
    Crafty.e("2D, DOM, Color")
       .attr({x: 30, y: (sceneHeight-groundHeight)/2, w: playerSize, h: playerSize})
       .color("#ff0000")
       .bind("KeyDown", function(event) {
        if(event.key == Crafty.keys.SPACE) {
            Crafty.enterScene("Game"); 
        }
    });
    Crafty.e("2D, DOM, Color")
       .attr({x: 0, y: 320, w: sceneWidth, h: groundHeight})
       .color("#00ff00"); 
});

Crafty.enterScene("Start");

Crafty.defineScene("GameOver", function() {

    var ScoreDisp = Crafty.e("2D, DOM, Text")
                  .attr({x: sceneWidth/2, y: sceneHeight/2, w: 100, h: 20})
                  .text("Score: " + score)
                  .textFont({size: '14px', weight:'bold'})
                  .bind("KeyDown", function(event) {
                      if(event.key == Crafty.keys.SPACE) {
                          Crafty.enterScene("Game");
                      }
                  });
});


// Game scene
Crafty.defineScene("Game", function() {
    score = 0; // resets score in a new game
    var playerVel = 0;
    // Player
    var Player = Crafty.e("Player, Collision, 2D, DOM, Color, Keyboard")
                    .attr({x: 30, y: (sceneHeight-groundHeight)/2, w: playerSize, h: playerSize})
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
                                playerVel = -10;
                        }
                    })
                    // Logic for collisions with 'Solid' objects
                    .bind("HitOn", function() {
                        this.y = (sceneHeight - groundHeight - playerSize);
                        Crafty.enterScene("GameOver");
                    })
                    .bind("EnterFrame", function() {
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
                        });

                   // Ground
                    var Ground = Crafty.e("Solid, Collision, 2D, Canvas, Color")
                        .attr({x: 0, y: 320, w: 500, h: groundHeight})
                        .color("#00ff00");
                    // Score display
                    var ScoreDisp = Crafty.e("2D, DOM, Text")
                        .attr({x: 5, y: 10, w: 100, h: 20})
                        .text("Score: " + score)
                        .textFont({size: '14px', weight:'bold'});
                   });


// Logic every frame

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
