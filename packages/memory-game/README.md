# Memory Game

A memory game web component. It receives an array of objects describing cards where each one should contain an image and a name. The cards are duplicated, distributed randomly and then the game begins.


## Usage

```html
<memory-game></memory-game>
```

```javascript
import MemoryGame from '@leofavre/memory-game-component';

window.customElements.define('memory-game', MemoryGame);

const $memoryGame = document.querySelector('memory-game');

$memoryGame.cards = [{
  image: 'isle-of-dogs/chief.png',
  name: 'Chief'
}, {
  image: 'isle-of-dogs/duke.png',
  name: 'Duke'
}, {
  image: 'isle-of-dogs/king.png',
  name: 'King'
}, {
  image: 'isle-of-dogs/boss.png',
  name: 'Boss'
}]
```


## Properties

#### `cards` (Array)
An arrays of objects representing the cards to be rendered. See [Usage](#usage) for example.


## CSS custom properties

#### `--memory-game-cards-per-line`
- Default: 6

The number of cards per line.

#### `--memory-game-gap`
- Default: 20px

The distance between cards.
