import * as actions from "../actions/actionTypes"

export const loginReducer = (state = { token: ""}, action) => {
    switch (action.type) {
      case actions.LOGIN_USERS:
        console.log(action.payload.token);
        return {token:action.payload.token,}

      default:
        return state;
    }
  };

