import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'

import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';



import Home from './pages/home.jsx';
import Place_to_stay from './pages/place_to_stay.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "place-to-stay",
    element: <Place_to_stay />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
)
