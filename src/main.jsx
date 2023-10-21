import React, { useContext } from 'react'
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

import AddProduct from './layouts/AddProduct.jsx';
import DetailsProduct from './layouts/DetailsProduct.jsx';
import Netflix from './layouts/Netflix.jsx';
import Details from './layouts/Details.jsx';
import Update from './layouts/Update.jsx';
import MyCart from './layouts/MyCart.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Disney from './layouts/Disney.jsx';
import UpdateDisney from './layouts/UpdateDisney.jsx';
import Spotify from './layouts/Spotify.jsx';
import UpdateSpotify from './layouts/UpdateSpotify.jsx';
import Warner from './layouts/Warner.jsx';
import Sony from './layouts/Sony.jsx';
import UpdateSony from './layouts/UpdateSony.jsx';
import UpdateWarner from './layouts/UpdateWarner.jsx';
import TimeWarner from './layouts/TimeWarner.jsx';
import UpdateTimeWarner from './layouts/UpdateTimeWarner.jsx';


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/home',
        element: <Home/>,
        loader:()=> fetch('http://localhost:5000/product')
     
        
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
        element:<PrivateRoute>
          <AddProduct/>
          </PrivateRoute>
      },
      {
        path:'/details',
        element:<DetailsProduct/>
        
        
      },
      
      {
        path:'/netflix',
        element:<Netflix/>,
        loader:()=> fetch('http://localhost:5000/netflix')

      },
      {
        path:'/netflix/:id',
        element:<Details/>,
        loader:({params})=> fetch(`http://localhost:5000/netflix/${params.id}`)
      },
      {
        path:'/disney',
        element:<Disney/>,
        loader:()=> fetch('http://localhost:5000/disney')

      },
      {
        path:'/disney/:id',
        element:<PrivateRoute>
          <UpdateDisney/>
          </PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/disney/${params.id}`)
      },
      {
        path:'/spotify',
        element:<Spotify/>,
        loader:()=> fetch('http://localhost:5000/spotify')
      },
      {
        path:'/spotify/:id',
        element:<PrivateRoute>
          <UpdateSpotify/>
          </PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/spotify/${params.id}`)
      },
      {
        path:'/warner',
        element:<Warner/>,
        loader:()=> fetch('http://localhost:5000/warner')

      },
      {
        path:'/warner/:id',
        element:<PrivateRoute>
          <UpdateWarner/>
          </PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/warner/${params.id}`)

      },
      {
        path:'/sony',
        element:<Sony/>,
        loader:()=> fetch('http://localhost:5000/sony')

      },
      {
        path:'/sony/:id',
        element:<PrivateRoute>
          <UpdateSony/>
          </PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/sony/${params.id}`)

      },
      {
        path:'/timewarner',
        element:<TimeWarner/>,
        loader:()=> fetch('http://localhost:5000/timewarner')

      },
      {
        path:'/timewarner/:id',
        element:<PrivateRoute> 
          <UpdateTimeWarner/>
           </PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/timewarner/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<PrivateRoute>
          <Update/>
          </PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/netflix/${params.id}`)

      },
      {
        path:'/myCart',
        element:<PrivateRoute>
          <MyCart/>
          </PrivateRoute>,
        loader:()=> fetch('http://localhost:5000/cart')
        
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
