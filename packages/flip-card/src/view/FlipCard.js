import { withElmnt, coerceToBoolean } from '@leofavre/elmnt';
import FlipCardView from './FlipCardView.js';

export default class extends withElmnt(HTMLElement) {
  static get parameters () {
    return [{
      attrProp: 'revealed',
      toProp: coerceToBoolean,
      onPropChanged: 'updateLayout'
    }];
  }

  render () {
    return FlipCardView(this);
  }
}
