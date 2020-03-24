import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //This comes from the react-redux package which we installed and help us connect the Redux part of our app with the React app part of our app
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
                <Provider store={store}> 
                    <App />
                </Provider>, document.getElementById('root')); //The provider component is going to take care of passing down the store to all components down the component tree from the app.
                                                               //Then we use connect to finish this connection.
registerServiceWorker();
