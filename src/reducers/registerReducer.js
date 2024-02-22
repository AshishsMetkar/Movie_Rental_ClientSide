import * as actions from "../actions/actionTypes"


export const registerReducer = (state = { users: {}}, action) => {
    switch (action.type) {
      case actions.REGISTER_USERS:
        
        return {users:action.payload.users}

      default:
        return state;
    }
  };
  