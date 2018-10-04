import withObservedProperties from 'observed-properties';
import { html, render } from 'lit-html';
import sequence from '../helpers/sequence.js';
import memoryGameReducer from '../state/memoryGameReducer.js';
import { distributeCards } from '../state/memoryGameActions.js';
import { getNumberOfCards, getCardAtPosition } from '../state/memoryGameSelectors.js';

export default class extends withObservedProperties(HTMLElement) {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
    this.state = memoryGameReducer();
  }

  static get observedProperties () {
    return ['state', 'cards'];
  }

  propertyChangedCallback (propName, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (propName) {
        case 'state':
          this.render(newValue);
          break;

        case 'cards':
          this.updateState(distributeCards(newValue));
          break;
      }
    }
  }

  updateState (callback) {
    this.state = memoryGameReducer(this.state, callback);
  }

  static renderCard (state) {
    return position => {
      const card = getCardAtPosition(position, state);
      return html`
        <p>
          <span>${card.name}</span>
          <img src="${card.img}">
        </p>
      `;
    };
  }

  render (state) {
    render(html`
      <style>
        @import url("/memory-game/src/view/MemoryGame.css");
        :host { --cards-per-line: 4 };
      </style>
      <div>
        ${sequence(getNumberOfCards(state)).map(this.constructor.renderCard(state))}
      </div>
    `, this.shadowRoot);
  }
}
