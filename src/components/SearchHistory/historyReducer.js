const defaultState = {

};

export default function historyReducer(state = defaultState, action) {
<<<<<<< HEAD
    
    const  {type, payload }= action;

    switch(type) {

        default:
            
            return state
            
=======
    const  {type, payload }= action;

    switch(type){
        default:
            return state
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
    }
}