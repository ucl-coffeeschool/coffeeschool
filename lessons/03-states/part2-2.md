---
title: Game Lesson Three - Using Game States
---
## Part 2: Creating the Game Over Screen and Keeping Score
### Goal: Keeping track of score and displaying it to the player.

With a game over screen there is now the possibility to show the player some information about their last play. A standard piece of information to show to the player both during the game and after they lose (or complete) is what score they managed to achieve. Score in games such as these is usually dictated by how many obstacles have been cleared by the player, so we'll use that in this example.

There are other types of information in our game which could be recorded and used to calculate score or show to the player such as the time they managed to last before losing and how many jumps they used. After this example have a go at recording and using these different bits of information to show the player more about their last play.

In the "Game Lesson Two" we used Craftys component functionality to give our obstacles a label to allow for accessing them. The component label given to the obstacles was used to move all the obstacles and detect when an obstacle was out of play and it's entity should be destroyed.

To keep track of score we don't need to add much to our already existing code. As it is, when an obstacle goes off screen two entities are destroyed. Because these two entities make up an obstacle, each entity deletion with the component "Obstacle" should increase the score by half a point (0.5).

To allow score to be accessed by both the "Game" scene and the "GameOver" scene we can keep track of it in a variable `score` at the top of our code. Each time a game starts the score should be set to 0 so that should happen at the start of the "Game" scene.

Let's create our score variable:

```javascript
var score = 0; // Create the score variable

// Start, GameOver and Game scenes would be here
```

Now that we have our score variable we need to reset the score at the start of each play through the game. To do that we just need to set `score = 0` at the beginning of the "Game" scene.

```javascript
Crafty.defineScene("Game", function() {

    score = 0; // Reset the score

    // Main game lives here
})
```

With this in place we can count up the score when obstacles are destroyed! To do this we just need to increase `score` by 0.5 when we delete each entity that makes up half of the obstacle being destroyed.

```javascript
if(this.x < -objectWidth){
  score += 0.5; // Increase the score by half a point before deleting the entity
  this.destroy();
}
```

This results in the player's recorded score going up by 1 point every time they clear an obstacle (it goes off the stage).

To show the player what score they achieved in their last play-through we can create a text entity and place it in the corner of the screen. This bit involves two steps:
1.  Creating the entity to display the text to the player.
2.  Updating the displayed text for the entity each frame.

Creating the entity which displays text to the player follows the same process that we used for the text in the start screen and the end screen. The values shown in the code snippet below are just an example of the sort of values you can use, so feel free to play about and put the text where on the screen you think it should be!

```javascript
// score reset is here

Crafty.e("2D, DOM, Text")
  .attr({x: 5,
         y: 10,
         w: 100,
         h: 20})
  .text("Score: " + score)
  .textFont({size: '14px', weight: 'bold'});

// Rest of main game lives here
```

There's a problem with just leaving the code at that, as Crafty entities don't update their `text` property when variables they use change. This means that we have to update the score text ourselves! One way of doing this is binding the "EnterFrame" event to the entity that we're using and updating the text each game loop:

```javascript
Crafty.e("2D, DOM, Text")
  .attr({x: 5,
         y: 10,
         w: 100,
         h: 20})
  .text("Score: " + score)
  .textFont({size: '14px', weight: 'bold'})
  .bind("EnterFrame", function() {
    this.text("Score: " + score); // Here we're just accessing the entities .text property and using it to update the displayed text 
  });
```

Now we have an updating score that allows the player to see how well they're doing in their play-through! However, if the player loses then they won't be able to see what score they achieved so we should also show it to them on the game over screen.

Showing the player their score once the game is over is a simple matter of changing the `.text` property of the entity in the "GameOver" scene because we made our score globally accessible:

```javascript
// Our text element in the "GameOver" scene
Crafty.e("2D, DOM, Text")
  .attr({x: sceneWidth, y: sceneHeight/2, w: 100, h: 20})
  .text("Game Over! Your score was: " + score)
  .textFont({size: '14px', weight: 'bold'});
```

With that change our game now allows the player to keep track of how well they're doing while playing, while also letting them see how well they did once the game ends.
