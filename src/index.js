import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error, {ErrorFallback } from './component/Error';
import Main from './component/Main';
import List from './component/List';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Route settings
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Main /> },
      { path: 'list', element: <List /> },
    
    ],
  },
  {
    path: '/error',
    element: <Error />
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
