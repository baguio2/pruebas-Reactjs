import React from 'react'
import GaleriaList from '../galeria-list'

class Galeria extends React.Component {

  constructor(props) {
    super(props)
    this.state = { imgs: [] }
  }

  componentWillMount() {
    fetch('http://jsonplaceholder.typicode.com/photos?albumId=' + this.props.albumId)
      .then((response) => {
        return response.json()
      })
      .then((imgs) => {
        this.setState({ imgs: imgs })
      }).catch((response) => {
        console.log("Error al recuperar imgs.");
      })
  }

  render() {
    if (this.state.imgs.length > 0) {
      return (
        <div className="container-fluid">
          <GaleriaList listado={this.state.imgs} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando imgs...</p>
    }
  }

}

export default Galeria
