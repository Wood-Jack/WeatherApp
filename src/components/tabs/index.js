/* eslint-disable linebreak-style */
import { connect } from 'react-redux';
import Tabs from './tabs';


function mapStoreToProps(store) {
  return {
    weatherInfo: store.search.weatherInfo,
    userQuery: store.search.userQuery

  };
}

export default connect(mapStoreToProps)(Tabs);
