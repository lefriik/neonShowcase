import React from 'react'
import ReactDOM from 'react-dom' // es la version web de react
import './index.css' // Hoja de estilos generales de toda la app
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
)

