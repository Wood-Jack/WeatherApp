/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable object-curly-spacing */
import {connect} from 'react-redux';
import SearchBar from './searchBar';


function mapStoreToProps(store) {
  return {
    userQuery: store.searchReducer.userQuery,
  };
}

export default connect(mapStoreToProps)(SearchBar);
