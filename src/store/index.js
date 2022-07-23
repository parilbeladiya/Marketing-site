import { compose, createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean,
);

const composeEnhancer = (process.env.NODE_ENV !== 'production'
    && window
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
