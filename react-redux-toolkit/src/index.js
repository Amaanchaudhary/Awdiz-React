import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'     //step 6 : import provider from react-redux
import counterStore from './store/index.js'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={counterStore}>  
      <App />  {/* step 7 : wrap app component from provider and pass store = {yourStoreName} */}
    </Provider>
  </React.StrictMode>
                          // step 8 : in displayCounter
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
