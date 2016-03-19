---
title: Game Lesson Three - Using Game States
---
## Part 2: Creating the Game Over Screen and Keeping Score
### Goal: Creating the game over scene and displaying text in it.

Now that we have a start screen for our game we can create a game over screen for when the player loses the game. The game over screen can be used to show the player some text, in our case showing what score they managed to obtain before losing.

To create our game over screen we're going to use a Crafty Scene again. Let's place it between our `Crafty.enterScene` command for the Start Screen and the `Crafty.defineScene` command for the "Game" scene, using the same code that was used to define the other scenes:

```javascript
Crafty.defineScene("GameOver", function(){
    // Game over screen stuff goes here
});
```

In the Game Over screen we can show some text to the player to tell them that they've lost, as well as drawing the ground to make the game over screen look a bit nicer.

To draw the text we can create a Crafty entity with the text component just like we did in the start screen.

```javascript
Crafty.e("2D, DOM, Text")
  .attr({x: sceneWidth/2, y: sceneHeight/2, w: 100, h: 20})
  .text("Game Over!")
  .textFont({size: '14px', weight: 'bold'});
```

This text should go inside the "Game Over" scene we just made! Once the text is inside we can add the ground visual like we did in the start screen:

```javascript
Crafty.e("2D, DOM, Color")
  .attr({x: 0, y: playAreaHeight, w: sceneWidth, h: groundHeight})
  .color("#00ff00");
```

Now that we have a game over screen we can change what happens in our "Game" scene when the player collides with an obstacle! We no longer need to use `Crafty.pause` on a collision because we now have the game over screen to change to.

All we need to do is swap out the `Crafty.pause();` statement in the "HitOn" bind with the following scene change:

```javascript
Crafty.enterScene("GameOver");
```

Now that we have a game over scene to switch to, we can keep score and show it on the game over which is what we'll be doing next!
