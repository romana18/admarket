import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/home/Home.jsx'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Test from './components/Test.jsx'
import SignUp from './components/Forms/SignUp.jsx'
import LogIn from './components/Forms/LogIn.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Post from './components/Forms/Post.jsx'
import Profile from './components/profile/Profile.jsx'
import Product from './components/product/Product.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
      element:<Home/>
      },{
        path:'/signup',
        element:<SignUp/>
      },{
        path:'/login',
        element:<LogIn/>
      },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },{
      path:'/post',
      element:<Post/>
    },{
      path:'/profile',
      element:<Profile/>
    },{
      path:'/product',
      element:<Product/>
    }
    ]
  },{
    path:'/test',
    element:<Test/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
