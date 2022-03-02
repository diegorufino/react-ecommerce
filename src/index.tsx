import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './store/reducer';
import { ItemState, ItemAction, DispatchType } from './types';

const store: Store<ItemState, ItemAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
