import React from 'react'
import ReactDOM from 'react-dom'
import { BroserRouter as Router} from 'react-router-dom'
import EmpleadoApp from '../empleado-app'

//routes
import AppRoutes from './routes'

ReactDOM.render(
    <Router>
        <AppRoutes />
    </Router>,
    //<EmpleadoApp/>,

    document.getElementById('application')
)
