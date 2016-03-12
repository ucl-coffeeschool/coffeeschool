---
title: Game Lesson Three - Using Game States
---
## Part 1: Creating the Start Screen
### Goal: Defining a start scene and a game scene 

Most games don't tend to throw you straight into the game once you load it up. What if the player isn't ready to start playing immediately? This is pretty important for our game, because if you don't start playing straight away you lose almost instantly!

To get rid of frustrating part of the game we're going to create a simple start screen.

To create a game state in Crafty we can define a new `Scene` using `Crafty.defineScene`. We can give the scene a name and put code inside of the function it runs. 

To make our start screen let's create a scene and call it "Start":

```javascript
Crafty.defineScene("Start", function() {
    // Start screen stuff here :D
});
```

We want to place our "Start" scene between our game code and the variables at the top. This is because we want to wrap our game entity code inside of a "Game" scene so that we can switch to and from it.

Before we place anything in the "Start" scene let's wrap our game code in a new "Game" scene so that we don't have parts overlapping! The bits we want to have inside are shown in the example below:

```javascript
Crafty.defineScene("Game", function() {
    // Our ground goes here
    
    // Our player goes here

});

// Obstacle function is here!
```

Now if you run the code like this you won't see anything because Crafty hasn't "entered a scene" - *we're not in any game state at the minute*. Now, we need to start the game off by entering the "Start" scene. Crafty can only enter a scene that has been defined above the `enterScene()` function, which means to load the "Start" scene the enter scene code needs to be like this:

```javascript
Crafty.defineScene("Start", function() {
    // Start scene
});

Crafty.enterScene("Start");
```

With these scenes in place we're ready to fill our start screen!
