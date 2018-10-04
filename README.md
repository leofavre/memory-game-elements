# Memory Game Core
A memory game made with Redux and Web components.

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
