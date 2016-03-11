## Part 2: Making Moving Obstacles 
*Time estimate for Part 2: 15 minutes*

Now that we've created our ground we can now start to write our code to generate the obstacles that the player must pass through to continue playing the game. Because we're going to want to generate our obstacles a large number of times (potentially an infinite number of times) it's a good idea to write a function to do that!

We'll want to call our function during the game loop if a certain condition is met (*we want to make sure its okay to generate a new object so our game is fun and not frustrating!*). However before we can worry about when to generate our object we need to write the function to generate an object first.
