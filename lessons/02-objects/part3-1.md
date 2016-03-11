## Part 3: Detecting Collisions With the Player
*Time estimate for Part 3: 10 minutes*

We have our ground and our moving obstacles, but our player just passes right through them at the minute. That's no fun :(. 

To detect the player's collisions with other things we're going to make use of the `Solid` component we gave our ground and obstacles earlier. To use this component with our player we're going to make use of Crafty's `Collision` component, which provides a way of checking for collisions with other entities.

In a game like this usually if the player collides with an object the game is stopped and the player loses, so that's what we're going to do!
