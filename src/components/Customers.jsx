import React,{useEffect} from 'react';
// import { getCustomers } from '../services/fakeCustomerSevice';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { deleteCustomer,getAllCustomers } from '../actions/customerActionCreato';
function CustomerFunc() {
  // const customers = getCustomers();

  const dispatch =useDispatch();
  const customers= useSelector((state)=>state.customerReducer.customers)
  
  useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  // const handleDelete = () => {
  //   console.log('Deleted the genre');
  // };

  return (
    <div className="container">
      <h3 className="text-center my-4">Customers List</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Is Gold</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer._id}>
              <td>{index + 1}</td>
              <td> <Link to={`/customers/${customer._id}`} >{customer.name}</Link></td>
              <td>{customer.phone}</td>
              <td>{customer.isGold?<i className="bi bi-shield-fill-plus"></i>:<i className="bi bi-shield-plus"></i>}</td>
              <td>
                <button className="btn btn-danger" onClick={() => dispatch(deleteCustomer(customer._id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
      <div className="d-flex justify-content-center">
        <Link to="/customers/newform">
          <button className="btn btn-success">Add Customer</button>
        </Link>
      </div>
    

    </div>
  );
}

export default CustomerFunc;
