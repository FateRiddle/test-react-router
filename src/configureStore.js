import { createStore } from 'redux'

const reducer = (state={}, action) => {
  return state
}

const configureStore = () => {
  return createStore(reducer)
}

export default configureStore
