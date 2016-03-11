### Game Engines and Game Loops

With our variables in place to keep track of and affect the players motion we can now cause the player to move as a result of the values of these variables. To constantly update the speed, direction of movement and position of our player we need to know about "game loops". 

In general, games engines have a game loop that runs every frame that is rendered during a games running time. In some engines there will be just one game loop, where both the rendering (drawing) of objects on the screen and the logic of the game takes place. Other engines split the rendering and logic into separate loops so that if rendering is slowed or frames are skipped then the game logic isn't slowed along with it. Advanced engines often take an approach of making each separate object in a game an entity in its own right, with it's logic fairly isolated from everything else, paired with game loops.

Crafty follows an entity model as described earlier, but also uses a game loop. The game loop in Crafty is the event "EnterFrame", which you can act on the whole of Crafty or just a single entity. This lets you keep your codes concerns separated (so only the player entity has to worry about its behaviour, and the obstacles only have to worry about theirs).  

