import '../src/index.js';

const apiCards = [{
  name: 'Leonardo Favre',
  img: 'https://avatars2.githubusercontent.com/u/125764?s=460&v=4'
}, {
  name: 'Bianca Rosa',
  img: 'https://avatars1.githubusercontent.com/u/1480558?s=460&v=4'
}, {
  name: 'André MacDowell',
  img: 'https://avatars2.githubusercontent.com/u/1396377?s=460&v=4'
}, {
  name: 'Christian Kaisermann',
  img: 'https://avatars1.githubusercontent.com/u/12702016?s=460&v=4'
}, {
  name: 'Caio M. Veloso Dias',
  img: 'https://avatars3.githubusercontent.com/u/22959060?s=400&v=4'
}, {
  name: 'Pedro Fadel',
  img: 'https://avatars1.githubusercontent.com/u/9969220?s=460&v=4'
}];

const $memoryGame = document.querySelector('memory-game');
$memoryGame.cards = apiCards;
