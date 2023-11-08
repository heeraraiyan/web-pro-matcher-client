import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import AddJobs from './pages/AddJobs.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import MyPostedJobs from './pages/MyPostedJobs.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import MyBids from './pages/MyBids.jsx';

import AllJobs from './pages/AllJobs.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/addJobs',
        element: <AddJobs></AddJobs>
        
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/mypostedjobs',
        element: <MyPostedJobs></MyPostedJobs>

      },
      {
        path: '/mybids',
        element: <MyBids></MyBids>
      },
      {
        path: '/alljobs',
        element: <AllJobs></AllJobs>,
        loader: () =>fetch('http://localhost:5000/addJobs')
        
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
