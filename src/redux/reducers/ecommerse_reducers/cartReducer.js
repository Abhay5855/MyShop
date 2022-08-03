import {
  ADDTOCART,
  REMOVEFROMCART,
} from '../../action_constants/actionConstants'

const initialState = {
  cartItems: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART: {
      return {
        ...state,

        cartItems: [...state.cartItems, action.payload],
      }
    }

    case REMOVEFROMCART: {
      const filtered = state.cartItems.filter(
        (itemId) => itemId._id !== action.payload,
      )

      return {
        ...state,

        cartItems: filtered,
      }
    }

    default:
      return state
  }
}
