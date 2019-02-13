import {createStore as reduxCreateStore, combineReducers} from 'redux'

const initialState = {
  ui: {
    headerIsActive: false
  }
}

const ui = (state = initialState.ui, action) => {
  switch(action.type) {
    case('ACTIVE_HEADER'):
      return Object.assign({}, ui, {headerIsActive: action.val})
    default:
      return state
  }
}


const main = combineReducers({
  ui
})

const createStore = () => reduxCreateStore(main, initialState)

export default createStore