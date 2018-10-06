# Memory Game Elements

A set of web components for a memory game.


## Game loop

* Allows interaction.

* Waits for user to choose a card.

* Disallows interaction.

* Validates user choice:

  * Valid?

    * Updates board accordingly.

    * Sends success message.

  * Invalid?

    * Sends faillure message.

* Verify if the game has finished:

  * Finished?

    * Updates board accordingly.

    * Sends success message.

    * Finishes Game loop.

* Restarts Game loop.
