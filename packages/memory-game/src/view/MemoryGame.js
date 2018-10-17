import { withElmnt, withDomEvents, withReducer } from '@leofavre/elmnt';
import memoryGameReducer from '../state/memoryGameReducer.js';
import { distributeCards, requestPlayAsync } from '../state/memoryGameActions.js';
import MemoryGameView from './MemoryGameView.js';

export default class extends withReducer(memoryGameReducer)(
  withDomEvents(withElmnt(HTMLElement))) {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  static get parameters () {
    return [{
      prop: 'state',
      onPropChanged (newValue, oldValue) {
        if (oldValue && oldValue.events !== newValue.events) {
          const { name, detail } = [...newValue.events].pop();
          this.dispatchEventAndMethod(name, detail);
        }
        this.updateLayout();
      }
    }, {
      prop: 'cards',
      onPropChanged (newValue) {
        this.dispatchAction(distributeCards(newValue));
        this.dispatchEventAndMethod('start');
      }
    }];
  }

  handleClick (position) {
    return () => {
      this.dispatchAction(requestPlayAsync(position));
    };
  }

  render () {
    return MemoryGameView(this);
  }
}
