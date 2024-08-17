//estos elementos son los que necesito para renderizar mi app
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp title='Hola Mundo' subtitle={123456}/>
    </React.StrictMode>
)