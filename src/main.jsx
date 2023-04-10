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
import Jobs from './components/Jobs/Jobs';


const router = createBrowserRouter([
{
  path: '/',
  element: <Home></Home>,
  children:[{

      path: '/',
      element: <Banner></Banner>,
      loader: ()=>fetch('jobs.json'),

  },
  {
    path:'job/:jobId',
    element:<Jobs></Jobs>,
    // loader :({params}) =>fetch(`jobs.json/${params.jobId}`),
  }

]
  
},

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
