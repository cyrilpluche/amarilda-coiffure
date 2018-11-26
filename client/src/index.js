import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from './store';
import App from './components/App';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
)