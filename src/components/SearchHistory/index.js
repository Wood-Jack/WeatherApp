import {connect} from 'react-redux' ;
<<<<<<< HEAD
import SearchHistory from './searchHistory';
=======
import historySearcher from './searchHistory';
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22

 
function mapStoreToProps(store) {
    
    return{
        history: store.searchReducer.history,
    };
    
}  
<<<<<<< HEAD
export default connect(mapStoreToProps)(SearchHistory); 
=======
export default connect(mapStoreToProps)(historySearcher); 
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
