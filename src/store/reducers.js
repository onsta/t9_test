import { combineReducers } from 'redux'
import t9reducer from '../routes/Home/modules/t9'

export const makeRootReducer = () => {
  return combineReducers({
    t9: t9reducer
  })
}

export default makeRootReducer
