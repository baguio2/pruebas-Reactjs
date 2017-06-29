import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class EmpleadoRow extends React.Component {

  render() {
    return(
      <li className="media">
        <Link to="/album-list/{this.props.key}">
          <div className="media-body" >
            <h4>{this.props.name}</h4>
            <p>
              {this.props.email}
            </p>
          </div>
        </Link>
        <hr/>
      </li>
    )
  }
}

export default EmpleadoRow
