import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const store = createStore(rootReducer, applyMiddleware(thunk));

const initialState = {};
// const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
  applyMiddleware(thunk)
);

export default store;
