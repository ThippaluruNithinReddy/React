import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


// const reactElement = {
//     type: 'a',
//     props: {
//         href:'https://google.com',
//         target:'_blank'
//     },
//     childern:'Click me to Visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)
const anotherUser = "chai aur nithin"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // anotherElement
  reactElement
  // <App/>
)
