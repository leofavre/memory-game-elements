import withObservedProperties from 'observed-properties';
import { render } from 'lit-html';
import memoryGameReducer from '../state/memoryGameReducer.js';
import { distributeCards, requestPlayAsync } from '../state/memoryGameActions.js';
import MemoryGameView from './MemoryGameView.js';
import isFunction from '../helpers/isFunction.js';
import isPromise from '../helpers/isPromise.js';

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
          this.dispatch(distributeCards(newValue));
          break;
      }
    }
  }

  handleClick (position) {
    return () => {
      this.dispatch(requestPlayAsync(position));
    };
  }

  dispatch (action) {
    let resolvedAction = action;

    if (isFunction(resolvedAction)) {
      resolvedAction = action(this.dispatch.bind(this), this.state);
    }

    if (isPromise(resolvedAction)) {
      return resolvedAction.then(asyncAction => {
        this.state = memoryGameReducer(this.state, asyncAction);
        return this.state;
      });
    } else {
      this.state = memoryGameReducer(this.state, resolvedAction);
      return this.state;
    }
  }

  render () {
    render(MemoryGameView(this), this.shadowRoot);
  }
}
