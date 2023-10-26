import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import socketIOClient from 'socket.io-client';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { SocketProvider } from './hooks/socketHook';
const socket = socketIOClient('http://localhost:5000');
export const UserContext = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext.Provider value={socket}>
      <Router>
        <App />
      </Router>
  </UserContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
