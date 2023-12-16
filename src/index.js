import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Layout from '../src/componant/Layout'
import ErrorPage from '../src/Error-page'
import Acceuil from '../src/pages/Acceuil'
import Favories from '../src/pages/Favories'
import ScrollToTop from './componant/scrollToTop';

// import element Redux & persistStaor

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import {store} from './store/store'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      // errorElement: <ErrorPage/>,
      children:[
        {
          index:true,
          element: <Acceuil/>,
        },
        {
          path:"Favories",
          element: <Favories/>,
        },
      ]
  
  
  }
   ]

)


let persistor=persistStore(store)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor} >  
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

