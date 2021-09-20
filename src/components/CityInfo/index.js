import {connect} from 'react-redux' ;
import cityInfo from './CityInfo';

function mapStoreToProps(store){

    return {

      weatherInfo: store.searchReducer.weatherInfo,

    };
}

export default connect(mapStoreToProps)(cityInfo);