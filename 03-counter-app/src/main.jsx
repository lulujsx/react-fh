//estos elementos son los que necesito para renderizar mi app
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css';
import { HelloWorldApp } from './HelloWorldApp'
import CounterApp from './CounterApp/CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp subtitle={123456}/> */}
        <CounterApp value={10}/>
    </React.StrictMode>
)