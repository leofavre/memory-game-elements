import withObservedProperties from 'observed-properties';
import { render } from 'lit-html';
import memoryGameReducer from '../state/memoryGameReducer.js';
import { distributeCards, revealCard } from '../state/memoryGameActions.js';
import MemoryGameView from './MemoryGameView.js';

export default class extends withObservedProperties(HTMLElement) {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
    this.state = memoryGameReducer();
    this.handleClick = this.handleClick.bind(this);
  }

  static get observedProperties () {
    return ['state', 'cards'];
  }

  propertyChangedCallback (propName, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (propName) {
        case 'state':
          this.render();
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

  handleClick (position) {
    return () => {
      this.updateState(revealCard(position));
    };
  }

  render () {
    render(MemoryGameView(this), this.shadowRoot);
  }
}
