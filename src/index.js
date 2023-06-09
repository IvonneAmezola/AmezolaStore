import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

<script src="httpx://wwwpaypal.com/sdk/js?client-id=AatZt26Zvkt4scMztDw5-XBC7PBhlCf1dqqdF0Zjy2ikL4LY9w-gTY9lKiQC-VGdX7YSLkKzmuNxBPtm&currency=MXN"></script>

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-beyk0cqbjnajc8zs.us.auth0.com' 
                   clientId='3Lj5hnlNp13KioEWShCYhHDXMtJLTl22' 
                   redirectUri ={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();