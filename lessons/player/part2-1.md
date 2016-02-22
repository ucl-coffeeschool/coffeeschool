## Creating the Player, Part 2

Now that we've drawn the player we'll want to think about giving the player movement. In Flappy Bird style games there are generally only **two** types of movement by the player:

*   Movement instigated by player input - When the player "flaps".
*   Movement determined by the envrionment or game logic - The constant falling motion from a gravity-like behaviour.

Let's start by tacking the game behaviour which makes it appear as though there is a gravitational force pulling the player's avatar to the ground.
