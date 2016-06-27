import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/photo_actions';

import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends Component {

  photos() {
    const listItems = this.props.photos.map(photo => {
      return <PhotoIndexItem key={photo.id} photo={photo}/>;
    });

    return (
      <ul>
        { listItems }
      </ul>
    );
  }

  render() {
    return (
      <div className="photo-index">
        { this.photos() }
      </div>
    );
  }
}

function mapStateToProps({ photos }) {
  return { photos };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPhotos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
