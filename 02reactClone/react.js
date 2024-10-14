import React from 'react';
import ReactDOM from 'react-dom/client';

const reactElement = React.createContext(
    'a',
    {
       href: 'https://www.google.com',
       target: '_blank',
    },
    'Click me to visit google.com'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)