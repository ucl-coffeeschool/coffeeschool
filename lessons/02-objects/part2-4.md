### Goal: Creating obstacles at set intervals

Now that we have a function to generate obstacles we need to call it in Crafty's game loop. Usually in these sorts of games the obstacles come at the player at a fixed rate, so that's what we're going to do! 

An easy way to create our objects at fixed intervals is using a variable counter that we increase by one each time the game loop runs. We then check if this counter is high enough to make a new obstacle, if it is then we reset the counter and create an obstacle.

First lets create our counter variable! For now, we can put it up at the top of our JavaScript with the other variables. Let's have the counter start at 0, so give it that value when you declare it.

```javascript
var obstacleCounter = 0;
```

Next we want to increase the obstacle counter each time the game loop runs. To do this you can place the code inside the `EnterFrame` event code block we already bound to the player or we could make another code block to separate the bits of code with different purposes.

So we should add another `.bind` to our Player entity, and use the event `EnterFrame`. Inside this block of code we'll do the increasing of our counter and checking whether to make a new obstacle. Let's add that bind to the end of our entity (*remember to move the `;`*):

```javascript
.bind("EnterFrame", function() {
    // Check if counter is high enough
    // Make obstacle and reset counter
    obstacleCounter++;
});
```

Crafty tries to play 50 game loops every second, so if we want to make a new obstacle about every two seconds then we can generate an obstacle when the counter is at least 100 and then reset it.

Try putting an `if` statement in our new code block to check the counter and make a new obstacle if the counter is high enough!

///
```javascript
if(obstacleCounter>100){
    obstacleCounter=0;
    newObstacle();
}
```

Try running the code! What happens?

