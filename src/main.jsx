import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './layouts/Error.jsx';
import Home from './layouts/Home.jsx';
import Login from './layouts/Login.jsx';
import Registration from './layouts/Registration.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import AddProduct from './layouts/AddProduct.jsx';
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
      },
      {
        path:'/signUp',
        element:<Registration/>
      },
      {
        path:'/addProduct',
        element:<AddProduct/>
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
   <AuthProvider  >
   <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
