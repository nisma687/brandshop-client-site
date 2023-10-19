import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Authprovider from './providers/Authprovider.jsx';
import Error from './layouts/Error.jsx';
import Home from './layouts/Home.jsx';
import Login from './layouts/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/logIn',
        element:<Login/>
      }
    ]
  },
  {
    path:'*',
    element:<Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
