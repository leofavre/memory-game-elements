import { html } from '@leofavre/elmnt';

export default () => html`
  <style>
    @import url("flip-card/src/view/FlipCard.css");
  </style>
  <div class="flip-card--wrapper">
    <div class="flip-card--surface">
      <div class="flip-card--side flip-card--side-front"><slot></slot></div>
      <div class="flip-card--side flip-card--side-back"></div>
    </div>
  </div>
`;
