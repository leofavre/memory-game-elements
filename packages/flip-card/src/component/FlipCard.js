import { render } from 'lit-html';
import setAttr from '../helpers/setAttr.js';
import FlipCardView from './FlipCardView.js';

export default class extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes () {
    return ['revealed'];
  }

  get revealed () {
    return this.hasAttribute('revealed');
  }

  set revealed (value) {
    return setAttr(this, 'revealed', value);
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
