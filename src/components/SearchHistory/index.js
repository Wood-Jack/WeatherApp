import {connect} from 'react-redux' ;
import historySearcher from './searchHistory';

 
function mapStoreToProps(store) {
    
    return{
        history: store.searchReducer.history,
    };
    
}  
export default connect(mapStoreToProps)(historySearcher); 