import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import ProjectDetails from './Components/MyProjects/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
      path:'/',
      element:<Home></Home>
    },
    {
      path: '/prjectDetails/:id',
      element:<ProjectDetails></ProjectDetails>,
      loader:()=> fetch('/projectdata.json')
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
