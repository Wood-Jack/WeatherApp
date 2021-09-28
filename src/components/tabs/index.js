<<<<<<< HEAD
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
=======
// import { connect } from 'react-redux';
// import tabs from './tabs';


// function mapStoreToProps(store) {

//     return {

//         weatherInfo: store.search.weatherInfo,
//         userQuery: store.search.userQuery

//     };

// }

// export default connect(mapStoreToProps)(tabs);
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
