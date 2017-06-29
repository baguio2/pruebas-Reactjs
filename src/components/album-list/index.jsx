import React from 'react'
import AlbumRow from '../album-row'

class AlbumList extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {
            this.props.albums.map((album) => {
              return <AlbumRow key={ album.id }
                                  title={ album.title }/>
            })
          }
        </ul>
      </div>
    )
  }
}

export default AlbumList