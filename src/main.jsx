import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './assets/styles/global.scss'

// views
import Home from './views/Home.jsx'
import AboutUs from './views/AboutUs.jsx'
import Products from './views/Products.jsx'
import Faq from './views/Faq.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
