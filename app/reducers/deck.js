import { RETURN_DECK, NEXT_CARD } from '../action_types.js';

export const initialState = {
  deck:          [],
  currentCard:   {},
  nextCard:      {},
};

export default function home(state = initialState, action) {

  switch (action.type) {
    case RETURN_DECK:
      const bigDeck = [
        {
          number: 1,
          color: 'red'
        },
        {
          number: 2,
          color: 'blue'
        },
        {
          number: 3,
          color: 'red'
        },
        {
          number: 4,
          color: 'blue'
        },
        {
          number: 5,
          color: 'red'
        },
        {
          number: 6,
          color: 'blue'
        },
      ];
        return {
          ...state,
          deck:        bigDeck.slice(2),
          nextCard:    bigDeck.slice(1,2)[0],
          currentCard: bigDeck.slice(0,1)[0],
        };
    case NEXT_CARD:
      return {
        ...state,
        deck:        state.deck.slice(1),
        nextCard:    state.deck[0],
        currentCard: state.nextCard,
      };
    default:
      return state;
  }
}
