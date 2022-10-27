import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




const root = ReactDOM.createRoot(document.getElementById('root'));

//  https://github.com/vasturiano/react-force-graph/issues/390
//  Support React Strict Mode #390
//    react-force-graph does not currently support react strict mode.
//    Enabling react strict mode results in an empty graph canvas.
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


root.render(
  <App />  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
