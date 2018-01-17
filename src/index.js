import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';
import store from './store/store';

const wrapper = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(wrapper, document.getElementById('root'));
registerServiceWorker();
