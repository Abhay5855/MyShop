

import { combineReducers } from 'redux';
import { authReducer } from '../reducers/ecommerse_reducers/authReducer';
import { cartReducer } from '../reducers/ecommerse_reducers/cartReducer';



export const rootReducer = combineReducers({

      authReducer,
      cartReducer,
})

