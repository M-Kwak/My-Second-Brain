import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login';
import Homepage from './pages/homepage/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Homepage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
