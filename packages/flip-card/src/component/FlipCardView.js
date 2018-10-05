import { html } from 'lit-html';

export default () => html`
  <style>
    @import url('flip-card/src/component/FlipCard.css');
  </style>
  <div class="flip-card--wrapper">
    <div class="flip-card--face flip-card--face-front">
      <slot name="front"></slot>
    </div>
    <div class="flip-card--face flip-card--face-back">
      <slot name="back"></slot>
    </div>
  </div>
`;
