
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import NavBar from './Data/NavBar/NavBar';
import axios from 'axios';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Data/Layout/Layout';
import Register from './Data/Register/Register';
import Login from './Data/Register/Login';
import Erorr from './Data/Erorr/Erorr';
import ItemInfo from './Data/ItemInfo/ItemInfo';



function App() {
  let router = createBrowserRouter([{
    path:'/', element: <Layout/>},
 
    {path:'/Login', element: <Login/>}
     , {path:'/Register', element: <Register/>}
     ,{path:'ItemInfo/:id/:mediatype' , element: <ItemInfo/>}
    ,{path:'*', element: <Erorr/>},
])

  const getALLMOVIES = async () =>{
  const res= await  axios.get(`https://api.themoviedb.org/3/trending/?api_key=1907dd7e22213c1275b820c5455946aa`)
  }
  useEffect(()=>{
    getALLMOVIES()
  },[])
 
return ( <RouterProvider router={router}/>
  )
}

export default App
