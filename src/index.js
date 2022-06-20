import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux'
// import store from './store'
// import '../src/styles/index.scss';
import App from './App';
import "../src/assets/application.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <>
      <App />
    </>

  // {/* </Provider> */}
);
