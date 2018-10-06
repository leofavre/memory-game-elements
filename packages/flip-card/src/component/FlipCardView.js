import { html } from 'lit-html';

export default () => html`
  <style>
    @import url('flip-card/src/component/FlipCard.css');
  </style>
  <div class="flip-card--wrapper">
    <div class="flip-card--surface">
      <div class="flip-card--side flip-card--side-front"><slot></slot></div>
      <div class="flip-card--side flip-card--side-back"></div>
    </div>
  </div>
`;
