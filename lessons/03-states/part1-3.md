--- 
title: Game Lesson Three - Using Game States
---
### Goal: Adding graphics to the start screen and launching the main game

Now that there is a "Start" scene we can fill it with graphics and make the player able to launch into the game from it. You can have a bit of a mess about with the graphics here as they aren't too important for the game's functionality.

Usually this style of game has the player's avatar flying in the air until they start the game, so that's what I'm going to show you! To make it look like we're in the game scene but haven't started playing yet we just need to place the player's avatar and the ground in it.

However for the start screen no fancy behaviour needs to be added, so we can just make entities inside our `defineScene` function:

```javascript
Crafty.defineScene("Start", function() {
    
    // "Dummy" player
    Crafty.e("2D, DOM, Color")
        .attr({x: 30,y: 30, w: playerSize, h: playerSize})
        .color("#ff0000");

    // Dummy ground
    Crafty.e("2D, DOM, Color")
        .attr({x: 0, y: playAreaHeight, w: sceneWidth, h: groundHeight})
        .color("#00ff00");
});
```

Now that the visuals are mocked up we can add in an entity which uses the `Text` component to display a message about how to start. If we want to start the game when the player hits the spacebar then we can bind a `KeyDown` event to the mockup of the player and have the message tell the player how to start.

To put our text message in the middle of the screen we can add in this entity in the scene code block:

```javascript
Crafty.e("2D, DOM, Text")
    .attr({x: sceneWidth/2, y: sceneHeight/2, w: 100, h: 20})
    .text("Press 'space' to begin")
    .css({"text-align":"center"});
```

To then load the "Game" scene when the player hits the spacebar we just bind the `KeyDown` event to the "dummy" player in the "Start" scene like we did for the player jump in the real game.

The only difference is that instead of jumping we use:
```javascript
Crafty.enterScene("Game");
```

If you try this out you should now have a welcoming start screen for your game!
