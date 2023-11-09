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
import Details from './pages/Details.jsx';
import UpdateJob from './pages/UpdateJob.jsx';



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
        element: <MyPostedJobs></MyPostedJobs>,
        loader: () =>fetch('https://web-pro-matcher-server.vercel.app/addJobs_own')

      },
      {
        path: '/mybids',
        element: <MyBids></MyBids>,
        loader: () =>fetch ('https://web-pro-matcher-server.vercel.app/bid')
        
      },
      {
        path: '/alljobs',
        element: <AllJobs></AllJobs>,
        loader: () =>fetch('https://web-pro-matcher-server.vercel.app/addJobs')
        
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) =>fetch(`https://web-pro-matcher-server.vercel.app/addJobs/${params.id}`)
        
      },
      {
        path: '/updatejob/:id',
        element:<UpdateJob></UpdateJob>,
        loader: ({params}) =>fetch(`https://web-pro-matcher-server.vercel.app/addJobs/${params.id}`)

      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
