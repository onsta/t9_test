import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_NUMBER = 'ADD_NUMBER'
export const CHANGE_NUMBER = 'CHANGE_NUMBER'
export const REQUEST_LETTERS = 'REQUEST_LETTERS'
export const RECEIVE_LETTERS = 'RECEIVE_LETTERS'
export const LETTERS_LOST = 'LETTERS_LOST'

// ------------------------------------
// Actions
// ------------------------------------
export const changeNumber = (number) => (dispatch) => {
  dispatch({
    type    : CHANGE_NUMBER,
    payload : number
  })
  dispatch(requestLetters(number))
}

export const addNumber = (number) => (dispatch, getState) => {
  changeNumber(getState().t9.number + number)(dispatch)
}

export const requestLetters = (number) => (dispatch) => {
  dispatch({
    type    : REQUEST_LETTERS
  })
  if (number !== '') {
    fetch(`//localhost:3000/api/${number}`)
    .then((response) => {
      if (response.status >= 400) {
        dispatch(receiveLetters(response))
        console.log(`Server error ${response.status}`)
      }
      return response.json()
    })
    .then((letters) => {
      dispatch(receiveLetters(letters))
    })
  }
}

export const receiveLetters = (letters) => ({
  type    : RECEIVE_LETTERS,
  payload : letters
})

export const lettersLost = () => ({
  type    : LETTERS_LOST
})

export const actions = {
  changeNumber,
  addNumber
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_NUMBER] : (state, action) => ({ ...state, number: action.payload }),
  [REQUEST_LETTERS] : (state, action) => ({ ...state, status: 'fetching' }),
  [LETTERS_LOST] : (state, action) => ({ ...state, status: 'error' }),
  [RECEIVE_LETTERS] : (state, action) => ({ ...state, status: 'success', letters: action.payload })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { number: '', status: '', letters: [] }
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
