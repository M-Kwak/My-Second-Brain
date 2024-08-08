import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginActionPannel from './pages/login/LoginactionPannel/LoginActionPannel';

// /!\ LoginActionPannel is not the definitive component for Login page. /!\

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginActionPannel />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
