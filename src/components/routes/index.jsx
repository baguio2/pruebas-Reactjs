import React from 'react'
import ReactDOM from 'react-dom'
import { BroserRouter as Router, Link, Route } from 'react-router'
import EmpleadoApp from '../empleado-app'
import Galeria from '../galeria'
import Album from '../album'


const AppRoutes = () => {
    <Router>
            <Route path="/empleados-list" handler={EmpleadoApp} />
            <Route path="/album-list/:id" handler={Album} />
            <Route path="/galeria-list/:albumId" handler={Galeria} />
            <Route path="/" handler={EmpleadoApp} />
    </Router>
}
