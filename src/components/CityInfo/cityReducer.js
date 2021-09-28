<<<<<<< HEAD
/* eslint-disable linebreak-style */
=======
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
const defaultState = {

};

<<<<<<< HEAD

export default function cityReducer(state = defaultState, action) {
  const { type } = action;

  switch (type) {

    default:

      return state;

  }
}
=======
 
export default function cityReducer (state = defaultState, action){
   
  const { type, payload} = action;

  switch(type){

        default:

            return state
            
    }
} 
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
