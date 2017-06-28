import React from 'react'
import ReactDOM from 'react-dom'
import BroserRouter from 'react-router'
import { Router, Route, Switch } from 'react-router'
import EmpleadoApp from '../empleado-app'

//routes
import AppRoutes from './routes'

ReactDOM.render(
    <BroserRouter>
        <AppRoutes />
    </BroserRouter>,
    //<EmpleadoApp/>,

    document.getElementById('application')
)
