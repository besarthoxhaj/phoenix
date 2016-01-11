'use strict';

import {
  NEXT_CARD,
  BOUNCE_BACK,
  NO_BOUNCE_BACK,
  RETURN_DECK,
} from '../action_types.js';

export const initialState = {
deck:          [
                {
                  number:         "3",
                },
                {
                  number:         "4",
                },
                {
                  number:         "5",
                },
                {
                  number:         "6",
                },
                {
                  number:         "7",
                },
                {
                  number:         "8",
                },
                {
                  number:         "9",
                },
                {
                  number:         "10",
                },
              ],
nextCard:     {
                number: "2"
              },
currentCard:  {
                number: "1",
              },
bounceBack:   false

};

export default function (state = initialState, action) {

  switch (action.type) {
    case RETURN_DECK:

      return {
        ...initialState
      };
    case NEXT_CARD:
      return {
        ...state,
        deck:        state.deck.slice(1),
        nextCard:    state.deck[0],
        currentCard: state.nextCard,
      };
    case BOUNCE_BACK:
      return {
        ...state,
        bounceBack: true,
      }
    case NO_BOUNCE_BACK:
      return {
        ...state,
        bounceBack: false,
      }
    default:
      return state;
    }
}
