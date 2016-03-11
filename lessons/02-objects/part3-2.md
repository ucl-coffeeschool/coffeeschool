### Goal: Adding the collision component and checking for hits

To add the `Collision` component to our player entity we just add it to the list of components in the `.e` method.

```javascript
Crafty.e("Collision, 2D, DOM, Color") // See how we just placed the Collision component here?
        // rest of player here
```

The Crafty collision component provides two useful bits of functionality for us. We're going to use a method `checkHits` which allows us to check for collisions with entities that have a given component, while binding the `HitOn` event to our player entitiy to execute some code when a collision is detected with entities using the given component.

Let's add `checkHits` to our player entity in between our `attr` and `color` properties, using it to check for collisions with all entities with the `Solid` component:

```javascript
    .attr({ /* attr stuff here */ })
    .checkHits("Solid")
    .color(/* Color stuff here */);
```

Now that our player entity is checking for hits we can use the `HitOn` event binding to stop the game when the player collides with something! We bind the `HitOn` event just like the `EnterFrame` and `KeyDown` ones from earlier.

```javascript
.bind("HitOn", function() {
    Crafty.pause();
})
```

For now, the game will just pause when a collision happens. We can't do much else yet because we don't have any other game states to move to. We now have the core bit of our game working and can move on to have things like a starting menu, score and a game over screen!

For the starting menu and game over screen we will be using game states.
