import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import {reducer} from './reducer'
const data = [thunk]

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...data)));


export default store;










// import { applyMiddleware, createStore } from 'redux'; // Changed import statement
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {thunk} from 'redux-thunk';

// import { reducer } from './reducer';

// const middleware = [thunk];
// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// export default store;
