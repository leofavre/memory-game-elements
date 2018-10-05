import { render } from 'lit-html';
import setAttr from '../helpers/setAttr.js';
import FlipCardView from './FlipCardView.js';

export default class extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes () {
    return ['reveal'];
  }

  get reveal () {
    return this.hasAttribute('reveal');
  }

  set reveal (value) {
    return setAttr(this, 'reveal', value);
  }

  connectedCallback () {
    this.render();
  }

  attributeChangedCallback () {
    this.render();
  }

  render () {
    render(FlipCardView(), this.shadowRoot);
  }
}
