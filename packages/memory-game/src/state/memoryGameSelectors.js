export const getNumberOfCards = state => state.cards.length * 2;

export const getCardAtPosition = (position, state) =>
  state.cards.find(card => card.positions.includes(position));

export const isCardVisible = (position, state) => {
  const { revealed, matched } = state;
  return revealed.includes(position) || matched.includes(position);
};

export const isCardRevealed = (position, state) => {
  const { revealed } = state;
  return revealed.includes(position);
};

export const isCardMatched = (position, state) => {
  const { matched } = state;
  return matched.includes(position);
};

export const isPairOfCardsVisible = state =>
  state.revealed.length === 2;

export const isGameOver = (state) =>
  getNumberOfCards(state) === state.matched.length;
