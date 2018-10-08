import MemoryGame from './view/MemoryGame.js';

if (!customElements.get('memory-game')) {
  customElements.define('memory-game', MemoryGame);
}
