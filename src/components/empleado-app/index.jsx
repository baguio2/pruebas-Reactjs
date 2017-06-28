import React from 'react'
import EmpleadoList from '../empleado-list'

class EmpleadoApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { empleados: [] }
  }

  componentWillMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((empleados) => {
        this.setState({ empleados: empleados })
      }).catch((response) => {
        console.log("Error al recuperar empleados.");
      })
  }

  render() {
    if (this.state.empleados.length > 0) {
      return (
        <div className="container-fluid">
          <EmpleadoList listado={this.state.empleados} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando empleados...</p>
    }
  }

}

export default EmpleadoApp
