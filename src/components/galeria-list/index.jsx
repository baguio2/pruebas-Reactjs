import React from 'react'
import Gallery from 'react-photo-gallery'


class GaleriaList extends React.Component {

  render() {
    var gallery = this.props.listado.map((img) => { 
      return { src: img.url,
        srcset: [],
        sizes:[
          '(min-width: 480px) 50vw',
          '(min-width: 1024px) 33.3vw',
          '100vw'
        ],
        width: 681,
        height: 1024
      }
    })
    return (
        <Gallery photos={gallery}/>
    )
  }
}


export default GaleriaList