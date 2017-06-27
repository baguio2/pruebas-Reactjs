import React from 'react'

class GaleriaImagen extends React.Component {
  render() {

    let picture = this.props.picture;

    return (
      <figure className="media-left">
        <img className="media-object" width="100px" src={`${this.props.picture}`} />
      </figure>
    )
  }
}

export default EmpleadoImagen
