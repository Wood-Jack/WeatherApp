<<<<<<< HEAD
/* eslint-disable linebreak-style */
import { connect } from 'react-redux';
import cityInfo from './CityInfo';

function mapStoreToProps(store) {
  return {

    weatherInfo: store.searchReducer.weatherInfo,
  };
}

export default connect(mapStoreToProps)(cityInfo);
=======
import {connect} from 'react-redux' ;
import cityInfo from './CityInfo';

function mapStoreToProps(store){

    return {

      weatherInfo: store.searchReducer.weatherInfo,
    };

    
}

export default connect(mapStoreToProps)(cityInfo);
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
