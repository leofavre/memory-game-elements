import { html } from '@leofavre/elmnt';
import '@leofavre/flip-card-component';
import sequence from '../helpers/sequence.js';

import {
  getNumberOfCards,
  getCardAtPosition,
  isCardRevealed,
  isCardMatched
} from '../state/memoryGameSelectors.js';

const renderCard = ({ state, handleClick }) => position => {
  const { name, img } = getCardAtPosition(position, state);
  const revealed = isCardRevealed(position, state) ||
    isCardMatched(position, state);

  return html`
    <flip-card
      ?revealed=${revealed}
      @click=${handleClick(position)}
      class="memory-game--card">
      <span class="memory-game--bg"></span>
      <span class="memory-game--text">${name}</span>
      <img class="memory-game--media" src="${img}">
    </flip-card>
  `;
};

export default props => {
  const interactiveClass = props.state.isInteractive
    ? ' memory-game--wrapper-interactive'
    : '';

  return html`
    <style>
      @import url("memory-game/src/view/MemoryGame.css");
    </style>
    <div class="memory-game--wrapper${interactiveClass}">
      ${sequence(getNumberOfCards(props.state)).map(renderCard(props))}
    </div>
  `;
};
