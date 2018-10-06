export const getNumberOfCards = ({ cards }) => cards.length * 2;

export const getCardAtPosition = (position, { cards }) =>
  cards.find(card => card.positions.includes(position));

export const isCardRevealed = (position, { revealed }) =>
  revealed.includes(position);

export const isCardMatched = (position, { matched }) =>
  matched.includes(position);

export const isCardInTheGame = (position, { revealed, matched }) =>
  revealed.includes(position) || matched.includes(position);

export const isPairOfCardsVisible = ({ revealed }) => revealed.length === 2;

export const isGameOver = (state) =>
  getNumberOfCards(state) === state.matched.length;
