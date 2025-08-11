import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import store from './Practice/Redux/store';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
  domain="dev-o0bdx5jaqocbhto3.us.auth0.com"
  clientId="H1y3nokbdGRkDpWFZrzwlQUZH9WtIzKy"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  < App />
</Auth0Provider>

  // <React.StrictMode>
  //   < Provider store={store}>
  //   <App />
  //   </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
