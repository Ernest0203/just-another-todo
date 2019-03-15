import { connect } from 'react-redux';

import ListingComponent from '../components/listing/ListingComponent.jsx';

import {
  addItem,
  removeItem,
  getInputValue
} from '../actions/actions.js';

const mapStateToProps = (state) => {
  const { data, inputValue } = state.general;
  return { data, inputValue };
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (arg) => {
    dispatch(addItem(arg));
  },
  removeItem: (arg) => {
    dispatch(removeItem(arg));
  },
  getInputValue: (arg) => {
    dispatch(getInputValue(arg));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent);