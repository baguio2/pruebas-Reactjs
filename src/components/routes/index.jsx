import React from 'react'
import ReactDOM from 'react-dom'
import { BroserRouter as Router, Link} from 'react-router-dom'
import { Router, Route, Switch } from 'react-router'
import EmpleadoApp from '../empleado-app'
import Galeria from '../galeria'
import Album from '../album'


const AppRoutes = () => {
    <Locations>
        <Switch>
            <Location path="/empleados-list" handler={EmpleadoApp} />
            <Location path="/album-list/:id" handler={Album} />
            <Location path="/galeria-list/:albumId" handler={Galeria} />
            <Location path="/" handler={EmpleadoApp} />
        </Switch>
    </Locations>
}
