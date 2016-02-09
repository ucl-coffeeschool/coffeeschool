// Global/Environment Variables
var playerSize = 20;
var sceneWidth = 500, sceneHeight = 350, groundHeight = 30;
var playAreaHeight = (sceneHeight - groundHeight);
var g = 1.0;
var score = 0;

// Initialisation
// Crafty runs itself in a scene of width x height in the element with id "game"
Crafty.init(sceneWidth, sceneHeight, document.getElementById("game"));
// Sets the background
Crafty.background("#ADD8E6");

// Start Scene
Crafty.defineScene("Start", function() {
    // Introductory text
    Crafty.e("2D, DOM, Text")
        .attr({x: sceneWidth/2, y: sceneHeight/2, w: 100, h: 20})
        .text("Press 'space' to begin")
        .css({"text-align":"center"});

    // The 'dummy' player model 
    Crafty.e("2D, DOM, Color, Keyboard")
        .attr({x: 30, y: (playAreaHeight/2), w: playerSize, h: playerSize})
        .color("#ff0000")
        // Handle any keypress events
        .bind("KeyDown", function(event) {
            // If the key pressed is the space bar then move to the "Game" scene
            if(event.key == Crafty.keys.SPACE) {
                Crafty.enterScene("Game");
            }
        });

    // Mock up the ground for visuals
    Crafty.e("2D, DOM, Color")
        .attr({x: 0, y: playAreaHeight, w: sceneWidth, h: groundHeight})
        .color("#00ff00");
});

// Point at which the to enter the "Start" scene, as we cannot enter the first scene before it is defined.
Crafty.enterScene("Start");

// Game Over Scene

Crafty.defineScene("GameOver", function() {

    // Game over and score text
    Crafty.e("2D, DOM, Text")
        .attr({x: sceneWidth/2, y: sceneHeight/2, w: 100, h: 20})
        .text("Game Over! Your score was: " + score)
        .textFont({size: '14px', weight: 'bold'})
        // Here handle key press events
        .bind("KeyDown", function(event) {
            // if key pressed is space go to the game scene
            if(event.key == Crafty.keys.SPACE) {
                Crafty.enterScene("Game");
            }
        });
    
    // Mock up the ground for visuals
    Crafty.e("2D, DOM, Color")
        .attr({x: 0, y: playAreaHeight, w: sceneWidth, h: groundHeight})
        .color("#00ff00");

});

// Game Scene

Crafty.defineScene("Game", function() {
    
    score = 0; // resets the score variable 

    var playerVel = 0; // creates the variable to keep track of the players velocity

    var obstacleCounter = 0; // creates the variable to count frames between obstacle generation


    // Creating the environment and UI
    // Ground creation
    Crafty.e("Solid, Collision, 2D, Canvas, Color")
        .attr({x: 0,
            y: playAreaHeight,
            w: sceneWidth,
            h: groundHeight})
        .color("#00ff00");

    // Score display creation
    var ScoreDisplay = Crafty.e("2D, DOM, Text")
        .attr({x: 5,
            y: 10,
            w: 100,
            h: 20})
        .text("Score: " + score)
        .textFont({size: '14px', weight: 'bold'});
    
    // Creating the player
    var Player = Crafty.e("Player, Collision, 2D, DOM, Color, Keyboard")
                    .attr({x: 30,
                        y: (playAreaHeight/2),
                        w: playerSize,
                        h: playerSize})
                    .checkHits("Solid") // Checks for hits with entities tagged solid
                    .color("#ff0000")   // Gotta have a red square, right guys? (:
                    // Binding game loop logic
                    .bind("EnterFrame", function() {
                        // Handle the player hitting the ceiling by setting the player's velocity to g
                        if (this.y < 0) {
                            playerVel = g;
                            this.y += playerVel;
                        }
                        // If not at the ceiling then allow the player to fly up
                        else {
                            playerVel += g;
                            this.y += playerVel;
                        }
                    })
                    // Here handle any keypress events
                    .bind("KeyDown", function(event) {
                        // If the key pressed is the space bar then make player 'jump'
                        if(event.key == Crafty.keys.SPACE) {
                            playerVel = -10;
                        }
                    })
                    // Here we handle any collisions with the scenery
                    .bind("HitOn", function() {
                        // Ends the game when a collision with "Solid" tags occurs
                        Crafty.enterScene("GameOver");
                    })
                    // When a new frame is entered
                    .bind("EnterFrame", function() {
                        //Moves each entity with the obstacle label
                        Crafty("Obstacle").each(function() {
                            // If object is off screen, update score and destruct the object
                            if(this.x < (0 - objectWidth)) {
                                score += 0.5;
                                this.destroy();
                            }
                            // If an object is not offscreen then move it towards player
                            else {
                                this.x -= 3;
                            }
                        });

                        // Every 100 frames a new obstacles is spawned and counter is reset 
                        if(obstacleCounter > 100) {
                            obstacleCounter = 0;
                            newObstacle();
                        }

                        // updates the score every new frame
                        ScoreDisplay.text("Score: " + score);
                        // increments the counter used to create obstacles
                        obstacleCounter++;
                    });
});

// Reuseable functions

// Function used to generate obstacles with "random" mid points
function newObstacle()
{
    var objectWidth = 2 * playerSize; // Width of object is twice player size
    // Declare generated boundaries of objects
    var randomHeight = Math.floor((Math.random() * (sceneHeight/2)) + (sceneHeight/3));
    var bottomOfTopHalf = playAreaHeight - (randomHeight - playerSize);
    var topOfBottomHalf = bottomOfTopHalf + (4 * playerSize); //makes gap approximately 4 x player size

    // Create the top half of the pipe
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
            h: playAreaHeight - topOfBottomHalf})
        .color("#003319");
};
