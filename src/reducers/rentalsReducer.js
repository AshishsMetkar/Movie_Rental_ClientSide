import * as actions from "../actions/actionTypes";
export const rentalsReducer = (state = { rentals: [] }, action) => {
    switch (action.type) {
      case actions.GET_ALL_RENTALS:
        return { rentals: action.payload.data };
  
      case actions.DELETE_RENTALS:
        return {
          rentals: state.rentals.filter((r) => r._id !== action.payload.data._id),
        };
  
      case actions.ADD_RENTALS:
        return {
          rentals: [...state, action.payload.data]
        };
        case actions.UPDATE_RENTALS:
          const index = state.rentals.findIndex((r)=>r._id ===action.payload.data._id);
          const newRental =[...state.rentals];  
          newRental[index]=action.payload.data;
          console.log(newRental);
          return {rentals:newRental}
        // return{
        //   rentals:state.rentals.map((r)=>{
        //     if(r._id=== action.payload.data._id){
        //       r=action.payload.data
        //     }
        //     return r;
        //   })
        // }
  
      default:
        return state;
    }
  };
  