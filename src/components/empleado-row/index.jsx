import React from 'react'
import { BroserRouter as Router, Link} from 'react-router-dom'

class EmpleadoRow extends React.Component {

  render() {
    return(
      <li className="media">
        <div className="media-body" >
          <Link to="/album-list/{this.props.key}">
            <h4>{this.props.name}</h4>
            <p>
              {this.props.email}
            </p>
          </Link>
        </div>
        <hr/>
      </li>
    )
  }
}

export default EmpleadoRow
