import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';

const router = createBrowserRouter([
{
  path: '/',
  element: <Home></Home>,
  children:[{

      path: '/',
      element: <Banner></Banner>
 

  }]
  
},

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)