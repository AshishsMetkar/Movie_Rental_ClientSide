import * as actions from "../actions/actionTypes";
// import { getCustomers } from "../services/fakeCustomerSevice";

export const customerReducer = (state = { customers: [] , currentCustomer:[] }, action) => {
  switch (action.type) {
    case actions.GET_ALL_CUSTOMERS:
      return { ...state, customers: action.payload.customers };

      case actions.GET_BY_CUSTOMER_ID:
        return {
          ...state, currentCustomer:action.payload.customers
        }
    case actions.DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer._id !== action.payload.data._id
        ),
      };
    case actions.ADD_CUSTOMER: {
      return{...state,
      genres:[...state.customers,action.payload.data]
      }
  }

    case actions.UPDATE_CUSTOMER:{
      
      const index = state.customers.findIndex(c=>c._id===action.payload.data._id)
      const newCustomer = [...state.customers];
      newCustomer[index]=action.payload.data
      return {
        ...state,customers:newCustomer}
    }
    
    default:
      return state;
  }
};
