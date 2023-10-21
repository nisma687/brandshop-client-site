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
        loader:()=> fetch('https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/product')
     
        
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
        loader:()=> fetch('https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/netflix')

      },
      {
        path:'/netflix/:id',
        element:<Details/>,
        loader:({params})=> fetch(`https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/netflix/${params.id}`)
      },
      {
        path:'/disney',
        element:<Disney/>,
        loader:()=> fetch('https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/disney')

      },
      {
        path:'/disney/:id',
        element:<PrivateRoute>
          <UpdateDisney/>
          </PrivateRoute>,
        loader:({params})=> fetch(`https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/disney/${params.id}`)
      },
      {
        path:'/spotify',
        element:<Spotify/>,
        loader:()=> fetch('https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/spotify')
      },
      {
        path:'/spotify/:id',
        element:<PrivateRoute>
          <UpdateSpotify/>
          </PrivateRoute>,
        loader:({params})=> fetch(`https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/spotify/${params.id}`)
      },
      {
        path:'/warner',
        element:<Warner/>,
        loader:()=> fetch('https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/warner')

      },
      {
        path:'/warner/:id',
        element:<PrivateRoute>
          <UpdateWarner/>
          </PrivateRoute>,
        loader:({params})=> fetch(`https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/warner/${params.id}`)

      },
      {
        path:'/sony',
        element:<Sony/>,
        loader:()=> fetch('https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/sony')

      },
      {
        path:'/sony/:id',
        element:<PrivateRoute>
          <UpdateSony/>
          </PrivateRoute>,
        loader:({params})=> fetch(`https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/sony/${params.id}`)

      },
      {
        path:'/timewarner',
        element:<TimeWarner/>,
        loader:()=> fetch('https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/timewarner')

      },
      {
        path:'/timewarner/:id',
        element:<PrivateRoute> 
          <UpdateTimeWarner/>
           </PrivateRoute>,
        loader:({params})=> fetch(`https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/timewarner/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<PrivateRoute>
          <Update/>
          </PrivateRoute>,
        loader:({params})=> fetch(`https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/netflix/${params.id}`)

      },
      {
        path:'/myCart',
        element:<PrivateRoute>
          <MyCart/>
          </PrivateRoute>,
        loader:()=> fetch('https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/cart')
        
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
