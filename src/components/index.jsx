import React from 'react'
import ReactDOM from 'react-dom'
import { BroserRouter } from 'react-router-dom'
import { Router, Route, Switch } from 'react-router'
import EmpleadoApp from './empleado-app'

//routes
import Routes from './routes'

ReactDOM.render(
    <BroserRouter>
        <Routes/>
    </BroserRouter>,
    <EmpleadoApp/>,
    document.getElementById('application')
)
