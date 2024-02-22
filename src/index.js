import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import Genre from"./components/Genre.jsx"
import Movies from './components/Movies.jsx';
import Customer from './components/Customers';
import Login from './components/Login';
import Register from './components/Register';
import Rentals from './components/Rentals';
import RentalsForm from "./components/RentalsForm"
import GenresNew from "./components/Genresform"
import Moviesnew from "./components/Moviesform"
import CustomerNew from "./components/Customersfom"
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    <Routes>
    <Route index={true} element={<Genre/>}></Route>
    <Route path='/genres'element={<Genre/>}></Route>
    <Route path='/genres/newform'element={<GenresNew/>}></Route>
    <Route path='/genres/:id'element={<GenresNew/>}></Route>
    <Route path='/movies'element={<Movies/>}></Route>
    <Route path='/movies/newform'element={<Moviesnew/>}></Route>
    <Route path='/movies/:id' element={<Moviesnew/>}></Route>
    <Route path='/customers'element={<Customer/>}></Route>
    <Route path='/customers/newform'element={<CustomerNew/>}></Route>
    <Route path='/customers/:id' element={<CustomerNew/>}></Route>
    <Route path='/rentals'element={<Rentals/>}></Route>  
    <Route path='/rentals/newform'element={<RentalsForm/>}></Route>
    <Route path='/login'element={<Login/>}></Route>
    <Route path='/register'element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
