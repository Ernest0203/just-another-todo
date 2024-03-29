import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import { Provider } from 'react-redux';
import store from './store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
