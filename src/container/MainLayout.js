import {connect} from 'react-redux'
import Layout from '../layouts/Layout'

import {activeHeader} from '../actions/'

const mapToState = state =>  ({
  ui: state.ui
})


const mapDispatch = dispatch => ({
  setActive: val => dispatch(activeHeader(val))
})
const MainLayout = connect(
  mapToState,
  mapDispatch
)(Layout)

export default MainLayout