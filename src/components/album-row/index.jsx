import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class AlbumRow extends React.Component {

  render() {
    return(
      <li className="media">
        <Link to="/album-list/{this.props.key}">
          <div className="media-body" >
            <h4>{this.props.title}</h4>
          </div>
        </Link>
        <hr/>
      </li>
    )
  }
}

export default AlbumRow