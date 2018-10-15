# Memory Game

A memory game web component that receives an array of objects describing cards with images and names. The cards are duplicated and randomly distributed facing down. The goal of the game is to reveal matching cards two by two.


## Usage

```html
<memory-game></memory-game>
```

```javascript
import '@leofavre/memory-game-component';

const $memoryGame = document.querySelector('memory-game');

$memoryGame.cards = [{
  img: 'isle-of-dogs/chief.png',
  name: 'Chief'
}, {
  img: 'isle-of-dogs/duke.png',
  name: 'Duke'
}, {
  img: 'isle-of-dogs/king.png',
  name: 'King'
}, {
  img: 'isle-of-dogs/boss.png',
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
