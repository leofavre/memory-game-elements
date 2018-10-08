import FlipCard from './view/FlipCard.js';

if (!customElements.get('flip-card')) {
  customElements.define('flip-card', FlipCard);
}
