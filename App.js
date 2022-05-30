import React from 'react';
import { Provider } from 'react-redux';
import MiApp from './src/index';
import store from './src/redux/store';
export default function App() {
  return (
    <Provider store= {store}>
      <MiApp/>
    </Provider>
  );
}

