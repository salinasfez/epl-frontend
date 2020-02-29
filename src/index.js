import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// console.log(store.getState());

// //STORE (globalized state)


// //ACTION -> WHATEVER YOU WANT TO DO... THE METHOD? (function that returns an object)
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// //REDUCER -> reducer will check the action and based on the action the store will be modified===parameter will be the inital state, second param is the action
// const counter = (state = 0, action) => {
//     switch(action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//     }
// }
// //adding reducer to the store
// let store = createStore(counter);

// //Display store in the console

// store.subscribe(() => console.log(store.getState()));
// //DISPATCH -> way to dispatch the action
// store.dispatch(increment());




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
