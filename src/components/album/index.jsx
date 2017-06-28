import React from 'react'
import AlbumList from '../album-list'

class Album extends React.Component {

  constructor(props) {
    super(props)
    this.state = { albums: [] }
  }

  componentWillMount() {
    fetch('http://jsonplaceholder.typicode.com/albums?userId=' + this.props.key)
      .then((response) => {
        return response.json()
      })
      .then((albums) => {
        this.setState({ albums: albums })
      }).catch((response) => {
        console.log("Error al recuperar albums.");
      })
  }

  render() {
    if (this.state.albums.length > 0) {
      return (
        <div className="container-fluid">
          <AlbumList listado={this.state.albums} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando albums...</p>
    }
  }

}

export default Album