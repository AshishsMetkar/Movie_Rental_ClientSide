import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadLogin } from './actions/loginActionCreator';

function App() {
  const dispatch =useDispatch()

  useEffect(()=>{
    dispatch(loadLogin())
  },[])

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}

export default App;
