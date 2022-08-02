import { ADDTOCART } from '../../action_constants/actionConstants'

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

    default:
      return state
  }
}
