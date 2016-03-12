---
title: Game Lesson Three - Using Game States
---

Now that we have the core of our game working, it would be nice to have a start screen and a game over screen. To do this in Crafty we can have different "Scenes" to represent different game states.

If we want to have our game, a start screen and a game over screen we can define three different states of the game using Crafty's `Scene` functionality. One "Start" scene, one "GameOver" scene and a "Game" scene.

When we create these scenes we will wrap them around the code which we want to run during each scene. So let's get started!
