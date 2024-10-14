import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const user = "Rahul"

const reactElement = React.createElement(
  'a',
  {
     href: 'https://www.google.com',
     target: '_blank',
  },
  'Click me to visit google.com',
  user
)

createRoot(document.getElementById('root')).render(
    reactElement
)
